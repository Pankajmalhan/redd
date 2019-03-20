import { NetInfo } from 'react-native';

export function isNetworkAvailable(callback: any) {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
        console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    });
    function handleFirstConnectivityChange(connectionInfo) {
        console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
        NetInfo.removeEventListener(
            'connectionChange',
            handleFirstConnectivityChange
        );
    }
    NetInfo.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange
    );

}

export function removeNetworkEventListener() {
    NetInfo.isConnected.removeEventListener('connectionChange');
}

export const getCurrentNetworkStatus = async () => {
    try {
        return await NetInfo.getConnectionInfo();
    }
    catch (exp) {
        return null;
    }
}

// this is how the back end defines a boolean
export const BoolEnum/*:{[string]:number}*/ = {
    NoneBool: 0,
    True: 1,
    False: 2,
};