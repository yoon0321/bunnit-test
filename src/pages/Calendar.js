import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';

const Calendar = () => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [today, setToday] = useState(currentDay);

  const allMonth = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dayOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const current = new Date().toDateString().split(' ');
  const currentDay = Number(current[2]);
  const currentYear = Number(current[3]);
  // console.log(currentYear);
  const currentMonth = current[1];
  console.log(currentDay);
  const firstDayOfMonth = new Date(year, allMonth.indexOf(month), 1).getDay(); // 매월 1일의 요일 -> 반복문의 시작점
  // console.log(firstDayOfMonth);
  const lastDayOfMonth = new Date(
    year,
    allMonth.indexOf(month) + 1,
    0,
  ).getDate(); // 매월 말일 -> 반복문의 끝
  // console.log(lastDayOfMonth);
  const firstDayOfNextMonth = new Date(
    year,
    allMonth.indexOf(month) + 1,
    1,
  ).getDay(); // 다음월 1일의 요일
  const lastDayOfPreMonth = new Date(
    year,
    allMonth.indexOf(month),
    0,
  ).getDate(); // 이전월 말일

  useEffect(() => {
    setMonth(currentMonth);
    setYear(currentYear);
    setToday(currentDay);
  }, [currentMonth, currentYear, currentDay]);

  const toPreMonth = () => {
    if (month === allMonth[0]) {
      setMonth(allMonth[11]);
      setYear(year => year - 1);
    } else {
      setMonth(month => allMonth[allMonth.indexOf(month) - 1]);
    }
  };
  const toNextMonth = () => {
    if (month === allMonth[11]) {
      setMonth(allMonth[0]);
      setYear(year => year + 1);
    } else {
      setMonth(month => allMonth[allMonth.indexOf(month) + 1]);
    }
  };

  let preMonthDays = [];
  let thisMonthDays = [];
  let nextMonthDays = [];

  const makeCalendar = () => {
    for (let i = 1; i <= lastDayOfMonth; i++) {
      thisMonthDays.push(i);
    }
    if (firstDayOfMonth !== 0) {
      for (let i = 0; i < firstDayOfMonth; i++) {
        preMonthDays.unshift(lastDayOfPreMonth - i);
      }
    }
    if (firstDayOfNextMonth !== 0) {
      for (let i = 1; i <= 7 - firstDayOfNextMonth; i++) {
        nextMonthDays.push(i);
      }
    }

    let allDays = preMonthDays.concat(thisMonthDays, nextMonthDays).map(day => (
      <TouchableOpacity key={day} style={styles.touchableDay}>
        <Text>{day}</Text>
      </TouchableOpacity>
    ));
    const divide = (data, size) => {
      let dividedDays = [];
      for (let i = 0; i < data.length; i += size) {
        dividedDays.push(data.slice(i, i + size));
      }
      return dividedDays.map(week => <View style={styles.week}>{week}</View>);
    };
    return divide(allDays, 7);
  };
  return (
    <View style={styles.container}>
      <View style={styles.currentDateContainer}>
        <Button title="이전" onPress={() => toPreMonth()} />
        <Text style={styles.currentDateText}>{`${month} ${year}`}</Text>
        <Button title="다음" onPress={() => toNextMonth()} />
      </View>
      <View style={styles.weekContainer}>
        {dayOfTheWeek.map(day => (
          <View key={day} style={styles.daysContainer}>
            <Text style={styles.weekText}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.calendarContainer}>{makeCalendar()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  currentDateContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
    marginBottom: -50,
  },
  currentDateText: {
    fontSize: 18,
  },
  weekContainer: {
    flex: 0.1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },
  weekText: {},
  daysContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
  touchableDay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  week: {
    flex: 0.5,
    flexDirection: 'row',
  },
  dayText: {},
});

export default Calendar;
