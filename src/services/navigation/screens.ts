import StudentDetailsScreen from 'src/screens/PrincipalScreen/StudentDetails';
import ClassDetailsScreen from 'src/screens/PrincipalScreen/ClassDetails';
import TeacherListScreen from 'src/screens/PrincipalScreen/TeacherListScreen';
import TeacherDetailsScreen from 'src/screens/PrincipalScreen/TeacherDetailsScreen';
// import StarterScreen from 'src/screens/StarterScreen';
// import SettingsScreen from 'src/screens/SettingsScreen';
// import AppUpdateScreen from 'src/screens/AppUpdateScreen';
import HomeScreen from 'src/screens/HomeScreen';
import ChatScreen from 'src/screens/Chat/ChatScreen';
import NotificationScreen from 'src/screens/notificationScreen/NofiticationScreen';
import ActivityScreen from 'src/screens/ActivityScreen';
import IdCardScreen from 'src/screens/IdCardScreen';

import { Buttons } from './buttons';
import { Options } from 'react-native-navigation';
import AuthScreen from 'src/screens/AuthScreen';
import { InitializingScreen } from 'src/Initializing';
import { LoginScreen } from 'src/screens/LoginScreen';
import SettingsScreen from 'src/screens/SettingsScreen';
import AppUpdateScreen from 'src/screens/AppUpdateScreen';
import SchoolsScreen from 'src/screens/SchoolsScreen';

//Farm Drirector Screen
import ChooseFarmScreen from 'src/screens/Farm/ChooseFarmScreen';
import FarmScreen from 'src/screens/Farm/FarmScreen';
import LogisticsScreen from 'src/screens/Farm/LogisticsScreen';
import TravelScreen from 'src/screens/Farm/TravelScreen';
import ClassListScreen from 'src/screens/PrincipalScreen/ClassListScreen';
import SchoolInformation from 'src/screens/PrincipalScreen/SchoolInformation';
import FarmInforScreen from 'src/screens/Farm/FarmInformationScreen';
import ProductInfor from 'src/screens/Farm/ProductInformationScreen';
import PlanScreen from 'src/screens/Farm/PlanScreen';
import TimeLineWorkScreen from 'src/screens/Farm/TimeLineWorkScreen';
import PestsScreen from 'src/screens/Farm/PetstScreen';
import HarvestScreen from 'src/screens/Farm/HarvestScreen';
import WeatherScreen from 'src/screens/Farm/WeatherScreen';
//End Farm Drirector Screen

//Teacher Display
import AttendanceScreen from 'src/screens/Teacher/AttendanceScreen';
import StudentListScreen from 'src/screens/Teacher/StudentListScreen';
import CommentScreen from 'src/screens/Teacher/CommentScreen';

//End Teacher Display

import AfterChooseSchool from 'src/screens/BossScreen/afterChooseSchoolScreen';
import SurviceScreen from 'src/screens/BossScreen/ServiceScreen';
import News from 'src/screens/BossScreen/NewsScreen';
import EatingService from 'src/screens/BossScreen/ServiceScreen/EatingServiceScreen';
import HealthCare from 'src/screens/BossScreen/ServiceScreen/HealthCareScreen';
import Infrastructure from 'src/screens/BossScreen/ServiceScreen/InfrastructureScreen';
import TeachingSyllabus from 'src/screens/BossScreen/ServiceScreen/TeachingSyllabusScreen';
import Marketing from 'src/screens/BossScreen/ServiceScreen/MarketingScreen';
import Human from 'src/screens/BossScreen/ServiceScreen/HumanScreen';
import Technology from 'src/screens/BossScreen/ServiceScreen/TechnologyScreen';
import ActivityMonitor from 'src/screens/BossScreen/ServiceScreen/ActivityMonitorScreen';
import EmployeeList from 'src/screens/BossScreen/Farm_Logistics/EmployeeListScreen';
import Order from 'src/screens/BossScreen/Farm_Logistics/OrderScreen';
import Transport from 'src/screens/BossScreen/Farm_Logistics/TransportScreen';
import Pests from 'src/screens/BossScreen/Farm_Logistics/PestsScreen';
import ChatBoxScreen from 'src/screens/Chat/ChatBoxScreen';




// Here we define all information regarding screens

type Screen = {
  id: string;
  options: () => Options;
};
type ScreenName =
  | 'initializing'
  | 'home'
  | 'chat'
  | 'notification'
  | 'activity'
  | 'idCard'
  | 'auth'
  | 'login'
  | 'settings'
  | 'appUpdates'
  | 'schools'
  | 'chooseFarm'
  | 'farm'
  | 'logistics'
  | 'travel'
  | 'schoolInformation'
  | 'classlist'
  | 'farmInfor'
  | 'productInfor'
  | 'plan'
  | 'timeLineWork'
  | 'afterChooseSchool'
  | 'SurviceScreen'
  | 'HealthCare'
  | 'Infrastructure'
  | 'TeachingSyllabus'
  | 'Marketing'
  | 'Human'
  | 'Technology'
  | 'EatingService'
  | 'ActivityMonitor'
  | 'classlist'
  | 'pests'
  | 'harvest'
  | 'weather'
  | 'attendance'
  | 'studentList'
  | 'comment'
  | 'classdetails'
  | 'studentdetails'
  | 'teacherlist'
  | 'News'
  | 'EmployeeList'
  | 'Order'
  | 'Transport'
  | 'Pests'
  | 'teacherdetails' |
  'chatBox';

const withPrefix = (s: string) => `ischool.${s}`;

const screens: Record<ScreenName, Screen> = {
  initializing: {
    id: withPrefix('Initializing'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  home: {
    id: withPrefix('HomeScreen'),
    options: () => ({
      topBar: {
        title: { text: 'Home' },
        // rightButtons: [Buttons.Inc, Buttons.Dec],
        visible: false,
      },
      layout: { backgroundColor: 'white' },
    }),
  },
  chat: {
    id: withPrefix('ChatScreen'),
    options: () => ({
      topBar: {
        title: { text: 'Chat' },
        visible: false,
      },
    }),
  },
  notification: {
    id: withPrefix('NotificationScreen'),
    options: () => ({
      topBar: {
        title: { text: 'Notification' },
      },
    }),
  },
  activity: {
    id: withPrefix('ActivityScreen'),
    options: () => ({
      topBar: {
        title: { text: 'Activity' },
      },
    }),
  },
  idCard: {
    id: withPrefix('IdCard'),
    options: () => ({
      topBar: {
        title: { text: 'danh ba' },
      },
    }),
  },
  auth: {
    id: withPrefix('AuthScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  login: {
    id: withPrefix('LoginScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  settings: {
    id: withPrefix('SettingsScreen'),
    options: () => ({
      topBar: {
        title: { text: 'Settings' },
      },
    }),
  },
  appUpdates: {
    id: withPrefix('AppUpdatesScreen'),
    options: () => ({
      overlay: { interceptTouchOutside: false },
      topBar: { visible: false },
      layout: { componentBackgroundColor: 'transparent' },
    }),
  },

  schools: {
    id: withPrefix('SchoolsScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },

  chooseFarm: {
    id: withPrefix('ChooseFarmScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  farm: {
    id: withPrefix('FarmScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  logistics: {
    id: withPrefix('LogisticsScreen'),
    options: () => ({
      topBar: {
        title: { text: 'Logistics', alignment: 'center' },
        rightButtons: [Buttons.User],
        background: { color: '#71E4DE' },
        visible: false,
      },
    }),
  },
  travel: {
    id: withPrefix('TravelScreen'),
    options: () => ({
      topBar: {
        title: { text: 'Travel', alignment: 'center' },
        rightButtons: [Buttons.User],
        background: { color: '#71E4DE' },
        visible: false,
      },
    }),
  },

  classlist: {
    id: withPrefix('ClassList'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },

  schoolInformation: {
    id: withPrefix('schoolInformation'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },

  afterChooseSchool: {
    id: withPrefix('afterChooseSchool'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  farmInfor: {
    id: withPrefix('FarmInforScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },

  productInfor: {
    id: withPrefix('ProductInfor'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },

  plan: {
    id: withPrefix('PlanScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },

  timeLineWork: {
    id: withPrefix('TimeLineWorkScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },

  SurviceScreen: {
    id: withPrefix('SurviceScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },

  EatingService: {
    id: withPrefix('EatingService'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },

  HealthCare: {
    id: withPrefix('HealthCare'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },

  Infrastructure: {
    id: withPrefix('Infrastructure'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },

  TeachingSyllabus: {
    id: withPrefix('TeachingSyllabus'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  Marketing: {
    id: withPrefix('Marketing'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  Human: {
    id: withPrefix('Human'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  Technology: {
    id: withPrefix('Technology'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  ActivityMonitor: {
    id: withPrefix('ActivityMonitor'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  pests: {
    id: withPrefix('PestsScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  harvest: {
    id: withPrefix('HarvestScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  weather: {
    id: withPrefix('WeatherScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  attendance: {
    id: withPrefix('AttendanceScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  studentList: {
    id: withPrefix('StudentListScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  comment: {
    id: withPrefix('CommentScreen'),
    options: () => ({
      topBar: {
        visible: false,
      },
    }),
  },
  classdetails: {
    id: withPrefix('ClassDetails'),
    options: () => ({
      topBar: { visible: false }
    })

  },
  studentdetails: {
    id: withPrefix('StudentDetails'),
    options: () => ({
      topBar: { visible: false }
    })

  },
  teacherlist: {
    id: withPrefix('TeacherList'),
    options: () => ({
      topBar: { visible: false }
    })

  },
  teacherdetails: {
    id: withPrefix('TeacherDetails'),
    options: () => ({
      topBar: { visible: false }
    })

  },
  News: {
    id: withPrefix('News'),
    options: () => ({
      topBar: { visible: false }
    })
  },
  EmployeeList: {
    id: withPrefix('EmployeeList'),
    options: () => ({
      topBar: { visible: false }
    })
  },
  Order: {
    id: withPrefix('Order'),
    options: () => ({
      topBar: { visible: false }
    })
  },
  Transport: {
    id: withPrefix('Transport'),
    options: () => ({
      topBar: { visible: false }
    })
  },
  Pests: {
    id: withPrefix('Pests'),
    options: () => ({
      topBar: { visible: false }
    })
  },
  chatBox: {
    id: withPrefix('ChatBoxScreen'),
    options: () => ({
      topBar: { visible: false }
    })
  }
};

const Screens = new Map<string, React.FC<any>>();
Screens.set(screens.initializing.id, InitializingScreen);
Screens.set(screens.home.id, HomeScreen);
Screens.set(screens.home.id, HomeScreen);
Screens.set(screens.chat.id, ChatScreen);
Screens.set(screens.notification.id, NotificationScreen);
Screens.set(screens.activity.id, ActivityScreen);
Screens.set(screens.idCard.id, IdCardScreen);
Screens.set(screens.auth.id, AuthScreen);
Screens.set(screens.login.id, LoginScreen);
Screens.set(screens.settings.id, SettingsScreen);
Screens.set(screens.appUpdates.id, AppUpdateScreen);
Screens.set(screens.schools.id, SchoolsScreen);
Screens.set(screens.chooseFarm.id, ChooseFarmScreen);
Screens.set(screens.farm.id, FarmScreen);
Screens.set(screens.logistics.id, LogisticsScreen);
Screens.set(screens.travel.id, TravelScreen);
Screens.set(screens.schoolInformation.id, SchoolInformation);
Screens.set(screens.afterChooseSchool.id, AfterChooseSchool);
Screens.set(screens.SurviceScreen.id, SurviceScreen);
Screens.set(screens.EatingService.id, EatingService);
Screens.set(screens.HealthCare.id, HealthCare);
Screens.set(screens.Infrastructure.id, Infrastructure);
Screens.set(screens.TeachingSyllabus.id, TeachingSyllabus);
Screens.set(screens.Marketing.id, Marketing);
Screens.set(screens.Human.id, Human);
Screens.set(screens.Technology.id, Technology);
Screens.set(screens.ActivityMonitor.id, ActivityMonitor);
Screens.set(screens.classlist.id, ClassListScreen);
Screens.set(screens.News.id, News);
Screens.set(screens.EmployeeList.id, EmployeeList);
Screens.set(screens.Order.id, Order);
Screens.set(screens.Transport.id, Transport);
Screens.set(screens.Pests.id, Pests);

Screens.set(screens.farmInfor.id, FarmInforScreen);
Screens.set(screens.productInfor.id, ProductInfor);
Screens.set(screens.plan.id, PlanScreen);
Screens.set(screens.timeLineWork.id, TimeLineWorkScreen);
Screens.set(screens.timeLineWork.id, TimeLineWorkScreen);
Screens.set(screens.pests.id, PestsScreen);
Screens.set(screens.harvest.id, HarvestScreen);
Screens.set(screens.weather.id, WeatherScreen);

Screens.set(screens.attendance.id, AttendanceScreen);
Screens.set(screens.studentList.id, StudentListScreen);
Screens.set(screens.comment.id, CommentScreen);


Screens.set(screens.classdetails.id, ClassDetailsScreen);
Screens.set(screens.studentdetails.id, StudentDetailsScreen);
Screens.set(screens.teacherlist.id, TeacherListScreen);
Screens.set(screens.teacherdetails.id, TeacherDetailsScreen);
Screens.set(screens.chatBox.id, ChatBoxScreen);



export default Screens;
export { screens };
