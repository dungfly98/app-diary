import { StackNavigator, DrawerNavigator } from 'react-navigation';
import HomeContainer from '../redux/containers/HomeContainer';
import NoteScreen from '../screen/NoteScreen';
import LockScreen from '../screen/LockScreen';
import NotificationScreen from '../screen/NotificationScreen';
import SlineMenuContainer from "../redux/containers/SlineMenuContainer";
import ColorAndFormatContainer from '../redux/containers/ColorAndFormatContainer';
import RatingsReviewsScreen from '../screen/RatingsReviewsScreen';
import ExportScreen from "../screen/ExportScreen";
import DiaryScreen from "../screen/DiaryScreen";
import FeedBackScreen from '../screen/FeedBackScreen';
import SplashScreen from '../screen/SplashScreen';
import LockDiaryScreen from '../screen/LockDiaryScreen';
import ResetPassScreen from '../screen/ResetPassScreen';
const Router = StackNavigator(
    {
        StackSplashScreen: { screen: SplashScreen },
        StackHomeScreen: { screen: HomeContainer },
        StackNoteScreen: { screen: NoteScreen },
        StackLockScreen: { screen: LockScreen },
        StackNotificationScreen: { screen: NotificationScreen },
        StackColorAndFormatContainer: { screen: ColorAndFormatContainer },
        StackRatingsReviewsScreen: { screen: RatingsReviewsScreen },
        StackExportScreen: { screen: ExportScreen },
        StackDiaryScreen: { screen: DiaryScreen },
        StackFeedBackScreen: { screen: FeedBackScreen },
        StackLockDiaryScreen: { screen: LockDiaryScreen },
        StackResetPassScreen: { screen: ResetPassScreen },
    }
);



const SlineMenu = DrawerNavigator(
    {
        StackHomeScreen:{ screen: Router }
    },
    
    {
        contentComponent: SlineMenuContainer
    }

);


export  { SlineMenu }     