// 防抖：动作绑定事件，动作发生后一定时间后触发事件，在这段时间内，如果该动作又发生，则重新等待一定时间再触发事件。
  function debounce(func, time) {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(()=> {
        func.apply(this, arguments)
      }, time);
    }
  }
// 节流： 动作绑定事件，动作发生后一段时间后触发事件，在这段时间内，如果动作又发生，则无视该动作，直到事件执行完后，才能重新触发。
  function throtte(func, time){
    let activeTime = 0;
    return () => {
      const current = Date.now();
      if(current - activeTime > time) {
        func.apply(this, arguments);
        activeTime = Date.now();
      }
    }
  }