import { Options } from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Here we define all information regarding tabs

const TabTitles: TabTitlesType = ['Home', 'Chat' , 'Notification' , 'Activity' , 'IdCard'];

const loadTabIcons = async (): Promise<TabIcons> => {
  // getting icons for tabs as they have to be as image sources
  const [tab1, tab2, tab3, tab4, tab5] = await Promise.all([
    Ionicons.getImageSource('home-outline', 25),
    Ionicons.getImageSource('chatbox-outline', 25),
    Ionicons.getImageSource('notifications-outline', 25),
    Ionicons.getImageSource('reader-outline', 25),
    Ionicons.getImageSource('newspaper-outline', 25),
  ]);
  const [tab1Selected, tab2Selected, tab3Selected, tab4Selected, tab5Selected] = await Promise.all([
    Ionicons.getImageSource('home', 25),
    Ionicons.getImageSource('chatbox', 25),
    Ionicons.getImageSource('notifications', 25),
    Ionicons.getImageSource('reader', 25),
    Ionicons.getImageSource('newspaper', 25),
  ]);

  return [
    {
      icon: tab1,
      selectedIcon: tab1Selected,
    },
    {
      icon: tab2,
      selectedIcon: tab2Selected,
    },
    {
      icon: tab3,
      selectedIcon: tab3Selected,
    },
    {
      icon: tab4,
      selectedIcon: tab4Selected,
    },
    {
      icon: tab5,
      selectedIcon: tab5Selected,
    },
  ];
}

const getTabOptions = async (): Promise<Options[]> => {
  const tabIcons = await loadTabIcons();

  return TabTitles.map((text, i) => ({
    bottomTab: { text, ...tabIcons[i], }
  }));
}

export {
  TabTitles,
  getTabOptions,
}