import default as Notify from 'react-notification-system-redux/lib';

export default class Notifications extends Notify {
  componentDidMount() {
    const { notifications } = nextProps;
    const notificationIds = notifications.map(notification => notification.uid);
    const systemNotifications = this.system().state.notifications || [];

    if (notifications.length > 0) {
      // Get all active notifications from react-notification-system
      // / and remove all where uid is not found in the reducer
      systemNotifications.forEach(notification => {
        if (notificationIds.indexOf(notification.uid) < 0) {
          this.system().removeNotification(notification.uid);
        }
      });

      notifications.forEach(notification => {
        this.system().addNotification({
          ...notification,
          onRemove: () => {
            this.context.store.dispatch(actions.hide(notification.uid));
            notification.onRemove && notification.onRemove();
          }
        });
      });
    }
  }
}
