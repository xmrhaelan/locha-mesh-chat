import { NativeModules, NativeEventEmitter, Platform } from "react-native"
import { notifyRedirect } from "./utils";

/**
 *
 * notification settings
 * @export
 * @class NotifService
 */

export default class NotifService {
    constructor() {
        this.LocalNotification = NativeModules.LocalNotification;
        this.onNotification()
        Platform.OS !== "android" ? NativeModules.LocalNotification.requestPermission() : null


    }

    onNotification = () => {
        const eventEmitter = new NativeEventEmitter(this.LocalNotification);
        eventEmitter.addListener('NoticationReceiver', (event) => {
            let notification = Platform.OS === "android" ? JSON.parse(event.dataJSON) : event


            console.log("notification", notification ,Platform.os)
            notifyRedirect(notification);
        })
    }

    localNotif = (data, id) => {
        this.LocalNotification.createNotification(
            {
                id: id.toString(),
                title: data.name,
                message: data.msg
            }
        )
    }



    //   checkPermission(cbk) {
    //     return PushNotification.checkPermissions(res => {
    //       console.log(res);
    //     });
    //   }

    cancelNotif(id) {
        this.LocalNotification.clearNotificationID({ id: id });
    }

    cancelAll() {
        this.LocalNotification.clearNotificationAll();
    }
}
