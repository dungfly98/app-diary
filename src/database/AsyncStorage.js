import { AsyncStorage } from 'react-native';
import { constant } from '../config/Constant';

const asyncStorage = {
    saveTimeNotification: saveTimeNotification,
    removeTimeNotification: removeTimeNotification,
    getTimeNotification: getTimeNotification,

    saveTextSize: saveTextSize,
    removeTextSize: removeTextSize,
    getTextSize: getTextSize,

    saveColorTheme: saveColorTheme,
    removeColorTheme: removeColorTheme,
    getColorTheme: getColorTheme,

    saveColorText: saveColorText,
    removeColorText: removeColorText,
    getColorText: getColorText,

    savePassLock: savePassLock,
    getPassLock: getPassLock,
    
    saveListNote: saveListNote,
    getListNote: getListNote,
    
}

async function saveTimeNotification(value) {
    try {
      await AsyncStorage.setItem(constant.TIME_NOTIFICATION, value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
};

async function  removeTimeNotification() {
    try {
      await AsyncStorage.removeItem(constant.TIME_NOTIFICATION);
    } catch (error) {
      console.log("Error resetting data" + error);
    }
}

async function getTimeNotification() {
  try {
    const value = await AsyncStorage.getItem(constant.TIME_NOTIFICATION);
    return value;
  } catch (error) {
    console.log("Error retrieving data" + error);
    return null;
  }
}

async function saveTextSize(value) {
  try {
    await AsyncStorage.setItem(constant.SIZE, value);
  } catch (error) {
    console.log("Error saving data" + error);
  }
};

async function  removeTextSize() {
  try {
    await AsyncStorage.removeItem(constant.SIZE);
  } catch (error) {
    console.log("Error resetting data" + error);
  }
}

async function getTextSize() {
  try {
    const value = await AsyncStorage.getItem(constant.SIZE);
    return value;
  } catch (error) {
    console.log("Error retrieving data" + error);
    return null;
  }
};

async function saveColorTheme(value) {
  try {
    await AsyncStorage.setItem(constant.COLOR_THEME, value);
  } catch (error) {
    console.log("Error saving data" + error);
  }
};

async function  removeColorTheme() {
  try {
    await AsyncStorage.removeItem(constant.COLOR_THEME);
  } catch (error) {
    console.log("Error resetting data" + error);
  }
};

async function getColorTheme() {
  try {
    const value = await AsyncStorage.getItem(constant.COLOR_THEME);
    return value;
  } catch (error) {
    console.log("Error retrieving data" + error);
    return null;
  }
};

async function saveColorText(value) {
  try {
    await AsyncStorage.setItem(constant.COLOR_TEXT, value);
  } catch (error) {
    console.log("Error saving data" + error);
  }
};

async function removeColorText() {
  try {
    await AsyncStorage.removeItem(constant.COLOR_TEXT);
  } catch (error) {
    console.log("Error resetting data" + error);
  }
};

async function getColorText() {
  try {
    const value = await AsyncStorage.getItem(constant.COLOR_TEXT);
    return value;
  } catch (error) {
    console.log("Error retrieving data" + error);
    return null;
  }
};
//save lock diary
async function savePassLock(value) {
  try {
    await AsyncStorage.setItem(constant.PASS, value);
  } catch (error) {
    console.log("Error saving pass" + error);
  }
};
async function getPassLock() {
  try {
    const value = await AsyncStorage.getItem(constant.PASS);
    return value;
  } catch (error) {
    console.log("Error" + error);
    return null;
  }
}

//save length listNote
async function saveListNote(value) {
  try {
    await AsyncStorage.setItem(constant.LIST, value);
  } catch (error) {
    console.log("Error saving list" + error)
  }
};
async function getListNote() {
  try {
    const value = await AsyncStorage.getItem(constant.LIST);
    return value;
  } catch (error) {
    console.log("Error get list" + error);
    return null; 
  }
}

export default asyncStorage;