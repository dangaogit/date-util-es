declare global {
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
  interface DateConstructor {
    /** 毫秒级格式化字符串 */
    format_ms: string;
  }
}

Date.format_ms = "yyyy-mm-dd hh:min:ss.ms";

Date.prototype.isSameYearFrom = function(date: Date) {
  return this.getFullYear() === date.getFullYear();
};

Date.prototype.isSameMonthFrom = function(date: Date) {
  return this.getMonth() === date.getMonth() && this.getFullYear() === date.getFullYear();
};

Date.prototype.isSameDayFrom = function(compare_date: Date) {
  return this.getFullYear() === compare_date.getFullYear() && this.getMonth() === compare_date.getMonth() && this.getDate() === compare_date.getDate();
};

Date.prototype.copy = function() {
  return new Date(this);
};

Date.prototype.getLastDate = function() {
  const date = new Date(this);
  date.calcMonth(1).setDate(0);
  return date;
};

Date.prototype.getFirstDate = function() {
  const date = new Date(this);
  date.setDate(1);
  return date;
};

Date.prototype.isInvalidDate = function() {
  return this.toString().indexOf("Invalid Date") !== -1;
};

Date.prototype.format = function(fmt = "yyyy-mm-dd hh:min:ss.ms", completion?: boolean) {
  if (typeof completion !== "boolean") {
    completion = true;
  }
  if (!isNaN(this.getFullYear())) {
    fmt = fmt.toLowerCase();
    let year: any = this.getFullYear(); // yyyy
    let mon: any = this.getMonth() + 1; // mm
    let day: any = this.getDate(); // dd
    let hours: any = this.getHours(); // hh
    let min: any = this.getMinutes(); // min
    let ss: any = this.getSeconds(); // ss
    let ms: any = this.getMilliseconds(); // ms
    if (completion === true) {
      if (year < 1000) {
        year = "0" + year;
        if (year < 100) {
          year = "0" + year;
          if (year < 10) {
            year = "0" + year;
          }
        }
      }
      if (mon < 10) {
        mon = "0" + mon;
      }
      if (day < 10) {
        day = "0" + day;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (min < 10) {
        min = "0" + min;
      }
      if (ss < 10) {
        ss = "0" + ss;
      }
      if (ms < 100) {
        ms = "0" + ms;
        if (ms < 10) {
          ms = "0" + ms;
        }
      }
    }
    fmt = fmt.replace(/(y{4})/, year);
    fmt = fmt.replace(/(m{2})/, mon);
    fmt = fmt.replace(/(d{2})/, day);
    fmt = fmt.replace(/(h{2})/, hours);
    fmt = fmt.replace(/(min)/, min);
    fmt = fmt.replace(/(s{2})/, ss);
    fmt = fmt.replace(/(ms)/, ms);
  } else {
    fmt = "";
  }

  return fmt;
};
Date.prototype.formatTime = function() {
  this.setHours(0);
  this.setMinutes(0);
  this.setSeconds(0);
  return this;
};
Date.prototype.calcTime = function(time: number) {
  const t = this.getTime();
  this.setTime(t + time);
  return this;
};
Date.prototype.calcSecond = function(second: number) {
  const t = this.getSeconds();
  this.setTime(t + second);
  return this;
};
Date.prototype.calcMinute = function(min: number) {
  const t = this.getMinutes();
  this.setMinutes(t + min);
  return this;
};
Date.prototype.calcHours = function(hours: number) {
  const t = this.getHours();
  this.setHours(t + hours);
  return this;
};
Date.prototype.calcDate = function(days: number) {
  const t = this.getDate();
  this.setDate(t + days);
  return this;
};
Date.prototype.calcWeek = function(week: number) {
  const t = this.getDate();
  this.setDate(t + week * 7);
  return this;
};
Date.prototype.calcMonth = function(mons: number) {
  const t = this.getMonth();
  this.setMonth(t + mons);
  return this;
};
Date.prototype.calcYear = function(year: number) {
  const t = this.getFullYear();
  this.setFullYear(t + year);
  return this;
};

export {};
