import { Navigation } from 'react-native-navigation';
import { Root, BottomTabs, StackWith, Component, Stack } from './layout';
import { screens } from './screens';
import NavigationSystem from './system';
import { getTabOptions } from './tabs';

class NavigationService extends NavigationSystem implements IService {
  [x: string]: any;
  init = async () => {
    await this.initSystem();
  };

  pushSettings = async (cId: string) => {
    this.push(cId, screens.settings.id);
  };

  pushSchoolsScreen = async (cId: string) => {
    this.push(cId, screens.schools.id);
  };

  AfterChooseSchool = async (cId: string) => {
    this.push(cId, screens.afterChooseSchool.id);
  };

  pushChooseFarmScreen = async (cId: string) => {
    this.push(cId, screens.chooseFarm.id);
  };

  pushFarmScreen = async (cId: string) => {
    this.push(cId, screens.farm.id);
  };

  pushLogisticsScreen = async (cId: string) => {
    this.push(cId, screens.logistics.id);
  };

  pushTravelScreen = async (cId: string) => {
    this.push(cId, screens.travel.id);
  };

  pushDetailsSchool = async (cId: string) => {
    this.push(cId, screens.schoolInformation.id);
  };

  pushClassList = async (cId: string) => {
    this.push(cId, screens.classlist.id);
  };

  pushFarmInforScreen = async (cId: string) => {
    this.push(cId, screens.farmInfor.id);
  };
  pushProductInforScreen = async (cId: string) => {
    this.push(cId, screens.productInfor.id);
  };

  pushPlanScreen = async (cId: string) => {
    this.push(cId, screens.plan.id);
  };
  pushTimeLineWorkScreen = async (cId: string) => {
    this.push(cId, screens.timeLineWork.id);
  };
  pushPestsScreen = async (cId: string) => {
    this.push(cId, screens.pests.id);
  };
  pushHarvestScreen = async (cId: string) => {
    this.push(cId, screens.harvest.id);
  };
  pushWeatherScreen = async (cId: string) => {
    this.push(cId, screens.weather.id);
  };


  pushAttendanceScreen = async (cId: string) => {
    this.push(cId, screens.attendance.id);
  };
  pushStudentListScreen = async (cId: string) => {
    this.push(cId, screens.studentList.id);
  };
  pushCommentScreen = async (cId: string) => {
    this.push(cId, screens.comment.id);
  };

  showSettings = async () => {
    this.show(screens.settings.id);
  };

  showAppUpdate = async () => {
    this.showOverlay(screens.appUpdates.id);
  };

  SurviceScreen = async (cId: string) => {
    this.push(cId, screens.SurviceScreen.id);
  };

  News = async (cId: string) => {
    this.push(cId, screens.News.id);
  };

  EmployeeList = async (cId: string) => {
    this.push(cId, screens.EmployeeList.id);
  };

  Order = async (cId: string) => {
    this.push(cId, screens.EmployeeList.id);
  };

  Transport = async (cId: string) => {
    this.push(cId, screens.EmployeeList.id);
  };

  Pests = async (cId: string) => {
    this.push(cId, screens.EmployeeList.id);
  };

  EatingService = async (cId: string) => {
    this.push(cId, screens.EatingService.id);
  };
  HealthCare = async (cId: string) => {
    this.push(cId, screens.HealthCare.id);
  };
  Infrastructure = async (cId: string) => {
    this.push(cId, screens.Infrastructure.id);
  };
  TeachingSyllabus = async (cId: string) => {
    this.push(cId, screens.TeachingSyllabus.id);
  };
  Marketing = async (cId: string) => {
    this.push(cId, screens.Marketing.id);
  };
  Human = async (cId: string) => {
    this.push(cId, screens.Human.id);
  };
  Technology = async (cId: string) => {
    this.push(cId, screens.Technology.id);
  };
  ActivityMonitor = async (cId: string) => {
    this.push(cId, screens.ActivityMonitor.id);
  };

  pushStudentDetailsScreen = async (cId: string) => {
    this.push(cId, screens.studentdetails.id);
  };  
  pushTeacherListScreen = async (cId: string) => {
    this.push(cId, screens.teacherlist.id);
  };
  pushClassDetails = async(cId: string) => {
    this.push(cId,screens.classdetails.id);
  }
  pushTeacherDetailsScreen = async (cId: string) => {
    this.push(cId, screens.teacherdetails.id);
  };

  pushChatBoxScreen = async (cId: string) => {
    this.push(cId, screens.chatBox.id);
  };

  InitializingApp = async () => {
    Navigation.setRoot({
      root: {
        component: {
          name: screens.initializing.id,
        },
      },
    })
  }

  AuthApp = async () => {
    Navigation.setRoot({
      root: {
        component: {
          name: screens.login.id,
        },
      },
    });
  };

  startApp = async () => {
    const tabOptions = await getTabOptions();

    Navigation.setRoot(
      Root(
        BottomTabs([
          StackWith(Component(screens.home.id), { ...tabOptions[0] }),

          StackWith(Component(screens.chat.id), tabOptions[1]),

          StackWith(Component(screens.notification.id), tabOptions[2]),

          StackWith(Component(screens.activity.id), tabOptions[3]),
          
          StackWith(Component(screens.idCard.id), tabOptions[4]),
        ]),
      ),
    );
  };
}
export default new NavigationService();
