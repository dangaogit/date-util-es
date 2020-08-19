# date-util-es
Date extension

# install
```typescript
npm i @dangao/date-util-es --save
//or
yarn add @dangao/date-util-es
```

# case
In entry file
```typescript
import "@dangao/date-util-es";
```

simple usage
```typescript
const date = new Date();
console.info(date.format()); // 2019-03-14 15:14:00.000
```

# Full extension
```typescript
interface Date {
    /**
     * **日期格式化函数，旨在快速将指定Date实例快速格式化为需要的格式**
     * ***
     * 示例代码：
     * ```
     * const date = new Date().format('yyyy-mm-dd hh:min:ss.ms')
     * console.log(date);// 2019-03-14 15:14:00.000
     * ```
     * ***
     * @param fmt 格式化模板 --默认为`yyyy-mm-dd hh:min:ss.ms`
     * >格式化可选参数有
     * >>- yyyy:年份
     * >>- mm:月份
     * >>- dd:天
     * >>- hh:时
     * >>- min:分
     * >>- ss:秒
     * >>- ms:毫秒
     * ***
     * @param complation 位数不足是是否补位`0`
     */
    format(fmt?: string, complation?: boolean): string;
    /**
     * 以当前日期为基础增加时间（`毫秒`）
     * @param time 增加的时间（可以是负数）
     */
    calcTime(time: number): Date;
    /**
     * 以当前日期为基础增加时间（`秒`）
     * @param second 增加的时间（可以是负数）
     */
    calcSecond(second: number): Date;
    /**
     * 以当前日期为基础增加时间（`分钟`）
     * @param minute 增加的时间（可以是负数）
     */
    calcMinute(minute: number): Date;
    /**
     * 以当前日期为基础增加时间（`小时`）
     * @param hours 增加的时间（可以是负数）
     */
    calcHours(hours: number): Date;
    /**
     * 以当前日期为基础增加时间（`天`）
     * @param days 增加的时间（可以是负数）
     */
    calcDate(days: number): Date;
    /**
     * 以当前日期为基础增加时间（`周`）
     * @param week 增加的时间（可以是负数）
     */
    calcWeek(week: number): Date;
    /**
     * 以当前日期为基础增加时间（`月`）
     * @param month 增加的时间（可以是负数）
     */
    calcMonth(month: number): Date;
    /**
     * 以当前日期为基础增加时间（`年`）
     * @param month 增加的时间（可以是负数）
     */
    calcYear(year: number): Date;
    /** 获取当月第一天 */
    getFirstDate(): Date;
    /** 获取当月最后一天 */
    getLastDate(): Date;
    /** 是否是无效日期 */
    isInvalidDate(): boolean;
    /** copy当前日期 */
    copy(): Date;
    /** 判断是否是同一天 */
    isSameDayFrom(compare_date: Date): boolean;
    /** 判断是否是同一月 */
    isSameMonthFrom(compare_month: Date): boolean;
    /** 判断是否是同一年 */
    isSameYearFrom(compare_year: Date): boolean;
    /** 设置当前时间为00:00:00 */
    formatTime(): Date;
  }
```