import { notification } from 'antd';
import { NotificationType } from 'src/interfaces';
import { app as actionTypes } from 'src/redux/action-types';

export const setDarkMode = (darkMode: boolean) => ({
   type: actionTypes.SET_DARK_MODE,
   darkMode,
});

export const setAppMessage = (
   type: NotificationType,
   title: string,
   description?: string
) =>
   title &&
   notification[type]({
      message: title,
      description: description,
      placement: 'top',
      duration: 6,
   });
