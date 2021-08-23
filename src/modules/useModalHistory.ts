/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useCallback, useEffect, useState } from 'react';
import { stringify } from 'qs';
import omit from 'lodash/omit';

import { openModalStack } from './OpenModalStack';

import {
  getParsedSearchParams,
  getStringListParam,
  ParsedParamType,
  stringifyOption,
} from '../utils/paramUtils';

interface OpenModalEventState {
  openModals: string[];
}

export default function useModalHistory(
  modalKey: string,
  isOpen: boolean,
  onClose: () => void,
) {
  const [pathname] = useState(window.location.pathname);

  const pushModalQuery = useCallback(() => {
    const openModals = openModalStack.getOpenModals();
    const state = { openModals };
    const currentQuery = getParsedSearchParams();
    const query = openModals.length
      ? stringify(
          {
            ...currentQuery,
            ...state,
          },
          stringifyOption,
        )
      : stringify(omit(currentQuery, ['openModals']), stringifyOption);

    window.history.pushState(state, '', `${pathname}${query}`);
  }, [pathname]);

  const replaceModalQuery = useCallback(() => {
    const openModals = openModalStack.getOpenModals();
    const state = { openModals };
    const currentQuery = getParsedSearchParams();
    const query = openModals.length
      ? stringify(
          {
            ...currentQuery,
            ...state,
          },
          stringifyOption,
        )
      : stringify(omit(currentQuery, ['openModals']), stringifyOption);

    window.history.replaceState(state, '', `${pathname}${query}`);
  }, [pathname]);

  const clearModalQuery = useCallback(
    (eventState: OpenModalEventState) => {
      const currentQuery = getParsedSearchParams();
      const query = stringify(
        omit(currentQuery, ['openModals']),
        stringifyOption,
      );

      window.history.replaceState(eventState, '', `${pathname}${query}`);
    },
    [pathname],
  );

  const pushModal = useCallback(() => {
    openModalStack.pushModalKey(modalKey);

    pushModalQuery();

    // console.log("current stack", openModalStack.getOpenModals());
  }, [modalKey, pushModalQuery]);

  const popModal = useCallback(() => {
    let poppedModalKey = '';

    const openModals = openModalStack.getOpenModals();

    if (openModals[openModals.length - 1] === modalKey) {
      poppedModalKey = openModalStack.popModalKey();

      replaceModalQuery();
    }

    // console.log("current stack", openModalStack.getOpenModals());

    return poppedModalKey;
  }, [modalKey, replaceModalQuery]);

  const handlePopState = useCallback(
    (event: PopStateEvent) => {
      if (!modalKey) {
        return;
      }

      /** 쿼리와 이벤트 state를 비교하여 앞으로 가기 동작으로 판단되는 경우 쿼리 보정 */
      const currentQuery = getParsedSearchParams();
      const queryState = currentQuery.openModals
        ? getStringListParam(currentQuery.openModals as ParsedParamType)
        : [];
      const eventState: string[] = event.state?.openModals ?? [];

      // console.log("===== query state =====", queryState);
      // console.log("===== event state =====", eventState);

      if (queryState.length > eventState.length) {
        clearModalQuery({ openModals: eventState });

        return;
      }

      /** 이외의 경우는 뒤로 가기 동작이므로 pop 수행 */
      const poppedModalKey = popModal();

      if (poppedModalKey === modalKey) {
        onClose();
      }
    },
    [popModal, onClose, modalKey, clearModalQuery],
  );

  useEffect(() => {
    if (!modalKey) {
      return;
    }

    if (isOpen) {
      pushModal();
    } else {
      popModal();
    }
  }, [modalKey, isOpen, pushModal, popModal]);

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);

    return () => {
      // openModalStack.clearOpenModals();
      window.removeEventListener('popstate', handlePopState);
    };
  }, [handlePopState]);

  return { pushModal, popModal };
}
