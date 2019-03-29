import { Konsolog } from "../../konsolog";

export function loading(this: Konsolog, _window?: Window): void {
  const loadingSVG = `<svg class="lds-message" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid"><g transform="translate(20 50)">
<circle cx="0" cy="0" r="20" fill="#da3732" transform="scale(0.864684 0.864684)">
  <animateTransform attributeName="transform" type="scale" begin="-0.3s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.9s" repeatCount="indefinite"></animateTransform>
</circle>
</g><g transform="translate(80 50)">
<circle cx="0" cy="0" r="20" fill="#e4762f" transform="scale(0.960221 0.960221)">
  <animateTransform attributeName="transform" type="scale" begin="-0.15s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.9s" repeatCount="indefinite"></animateTransform>
</circle>
</g><g transform="translate(140 50)">
<circle cx="0" cy="0" r="20" fill="#f7be33" transform="scale(0.581654 0.581654)">
  <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.9s" repeatCount="indefinite"></animateTransform>
</circle>
</g></svg>`;
  const base64 = (_window || window).btoa(loadingSVG);

  const style = "background: url('data:image/svg+xml;base64," + base64 + "') left top no-repeat; font-size: 16px;";
  this.console.log('%c     ', style);
}