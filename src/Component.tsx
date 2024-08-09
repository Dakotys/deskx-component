import { createSignal, onCleanup } from 'solid-js';

function getFormattedTme(options) {
  const now = new Date();
  const time = now.toLocaleTimeString(options.locales, {
    hour: options.hour,
    minute: options.minute,
    second: options.second,
    hourCycle: options.hourCycle,
  });
  const date = now.toLocaleDateString(options.locales, {
    year: options.year,
    month: options.month,
    day: options.day,
  });
  const day = now.toLocaleDateString(options.locales, { weekday: 'long' });
  return { time, date, day };
}

function Component(props: { options: any }) {
  const [now, setNow] = createSignal(getFormattedTme(props.options));
  const interval = setInterval(
    () => setNow(getFormattedTme(props.options)),
    1000
  );
  onCleanup(() => clearInterval(interval));

  return (
    <div class="clock">
      <div class="day">{now().time}</div>
      <div class="time">{now().date}</div>
      <div class="date">{now().day}</div>
    </div>
  );
}

export default Component;
