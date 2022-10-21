import Icon, { HomeOutlined } from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import classNames from "classnames";

export interface DynamicSvgProps {
  type: string;
}

function loadIcon(type: string) {
  return ICON_PATHS[type];
}

const ICON_PATHS: Record<string, any> = {
  chart:(
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2423" width="16" height="16"><path d="M278.755 777.557h89.543c22.642 0 40.96-18.318 40.96-40.96v-407.211c0-22.642-18.318-40.96-40.96-40.96h-89.543c-22.642 0-40.96 18.318-40.96 40.96v407.211c0 22.528 18.432 40.96 40.96 40.96zM292.409 343.040h62.237v379.904h-62.237v-379.904zM501.191 777.557h89.543c22.642 0 40.96-18.318 40.96-40.96v-521.102c0-22.642-18.318-40.96-40.96-40.96h-89.543c-22.642 0-40.96 18.318-40.96 40.96v521.102c0 22.528 18.432 40.96 40.96 40.96zM514.845 229.149h62.237v493.795h-62.237v-493.795zM723.627 777.557h89.543c22.642 0 40.96-18.318 40.96-40.96v-257.479c0-22.642-18.318-40.96-40.96-40.96h-89.543c-22.642 0-40.96 18.318-40.96 40.96v257.479c0 22.528 18.432 40.96 40.96 40.96zM737.28 492.771h62.237v230.173h-62.237v-230.173z" fill="" p-id="2424"></path><path d="M863.687 816.242h-676.181v-633.173c0-15.133-12.174-27.307-27.307-27.307s-27.307 12.174-27.307 27.307v659.911c0 6.258 2.048 11.947 5.575 16.498 5.006 6.827 13.085 11.378 22.187 11.378h703.147c15.133 0 27.307-12.174 27.307-27.307-0.114-15.019-12.288-27.307-27.421-27.307z" fill="" p-id="2425"></path></svg>

  ),
  layer:(
    <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3384"
    width="16"
    height="16"
  >
    <path
      d="M875.76 751.32H771.98c-18.75 0-33.96-15.2-33.96-33.96s15.2-33.96 33.96-33.96h103.78c8.3 0 15.31-8.21 15.31-17.93V190.71c0-9.72-7.01-17.93-15.31-17.93H301.29c-8.3 0-15.31 8.21-15.31 17.93v115.93c0 18.75-15.2 33.96-33.96 33.96s-33.96-15.2-33.96-33.96V190.71c0-47.34 37.34-85.85 83.23-85.85h574.47c45.89 0 83.23 38.51 83.23 85.85v474.76c0 47.34-37.34 85.85-83.23 85.85z"
      fill="#7F8693"
      p-id="3385"
    ></path>
    <path
      d="M722.71 919.14H148.24c-45.89 0-83.23-38.51-83.23-85.85V358.53c0-47.34 37.34-85.85 83.23-85.85h574.47c45.89 0 83.23 38.51 83.23 85.85v474.76c0 47.34-37.34 85.85-83.23 85.85zM148.24 340.6c-8.3 0-15.31 8.21-15.31 17.93v474.76c0 9.72 7.01 17.93 15.31 17.93h574.47c8.3 0 15.31-8.21 15.31-17.93V358.53c0-9.72-7.01-17.93-15.31-17.93H148.24z"
      fill="#7F8693"
      p-id="3386"
    ></path>
  </svg>
  ),
  information:(
    <svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3232" width="16" height="16"><path d="M862.984 36.237H160.816c-64.63 0-117.022 52.393-117.022 117.022v468.115c0 64.63 52.392 117.03 117.022 117.03H336.35l234.062 234.054V738.405h292.572c64.631 0 117.022-52.4 117.022-117.03V153.26c0.001-64.63-52.391-117.023-117.022-117.023z m75.925 585.138c0 32.282-43.659 75.436-75.925 75.436h-335.12v173.132l-150.13-155.988-17.145-17.144H160.816c-32.265 0-77.863-43.153-77.863-75.436V153.26c0-32.273 45.599-75.436 77.863-75.436h702.168c32.266 0 75.925 43.163 75.925 75.436v468.115z" fill="" p-id="3233"></path><path d="M219.327 229.673v40.617h585.129v-40.617H219.327z m0 157.649h585.129v-37.727H219.327v37.727z m0 117.023h351.085v-39.969H219.327v39.969z" fill="" p-id="3234"></path></svg>
  ),
  list:(
    <svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4164" width="16" height="16"><path d="M419.037 287.953h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM419.028 543.17h411.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H419.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H419.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h413.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="4165"></path><path d="M256.037 255.953m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="4166"></path><path d="M256.037 510.787m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="4167"></path><path d="M256.037 767.621m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="" p-id="4168"></path></svg>
  ),
  componment:(
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5141" width="16" height="16"><path d="M972.09863 1016.986301H259.506849c-19.638356 0-35.068493-15.430137-35.068493-35.068493V768.70137c-8.416438 5.610959-18.235616 9.819178-28.054794 12.624657h-1.40274c-12.624658 4.208219-26.652055 5.610959-39.276712 5.610959-77.150685 0-138.871233-63.123288-138.871233-138.871233 0-77.150685 63.123288-138.871233 138.871233-138.871232 14.027397 0 28.054795 2.805479 42.082191 7.013698 1.40274 0 2.805479 1.40274 4.20822 1.40274 7.013699 2.805479 14.027397 5.610959 19.638356 8.416438l2.805479 1.40274V269.326027c0-19.638356 15.430137-35.068493 35.068493-35.068493h228.646576l-4.20822-8.416438c-7.013699-11.221918-12.624658-22.443836-15.430137-35.068493v-1.40274c-4.208219-12.624658-5.610959-26.652055-5.610958-39.276712C462.90411 72.942466 526.027397 11.221918 601.775342 11.221918c77.150685 0 138.871233 63.123288 138.871233 138.871233 0 14.027397-2.805479 28.054795-7.013698 42.082191 0 1.40274-1.40274 2.805479-1.40274 4.20822-2.805479 7.013699-5.610959 14.027397-8.416438 19.638356l-7.013699 16.832877h255.29863c19.638356 0 35.068493 15.430137 35.068493 35.068493v314.213698c0 11.221918-5.610959 22.443836-15.430137 29.457535-9.819178 7.013699-22.443836 7.013699-33.665753 2.805479L897.753425 587.747945c-1.40274 0-1.40274-1.40274-2.80548-1.40274-2.805479-1.40274-7.013699-4.208219-11.221918-5.610958h-1.402739c-7.013699-2.805479-14.027397-2.805479-21.041096-2.80548-37.873973 0-68.734247 30.860274-68.734247 68.734247s30.860274 68.734247 68.734247 68.734246c7.013699 0 14.027397-1.40274 19.638356-2.805479 7.013699-1.40274 12.624658-5.610959 18.235616-8.416439 1.40274-1.40274 2.805479-1.40274 4.20822-2.805479l53.304109-25.249315c11.221918-5.610959 23.846575-4.208219 33.665754 1.40274s16.832877 18.235616 16.832876 29.457534V981.917808c0 19.638356-15.430137 35.068493-35.068493 35.068493z m-677.523288-70.136986h642.454795v-182.356164h-1.40274c-11.221918 7.013699-22.443836 12.624658-35.068493 16.832876h-1.40274c-12.624658 4.208219-26.652055 5.610959-39.276712 5.610959-77.150685 0-138.871233-63.123288-138.871233-138.871233 0-77.150685 63.123288-138.871233 138.871233-138.871232 14.027397 0 28.054795 2.805479 42.082192 7.013698 1.40274 0 2.805479 1.40274 4.208219 1.40274 7.013699 2.805479 14.027397 5.610959 19.638356 8.416438l9.819178 4.208219v-224.438356H662.093151c-11.221918 0-22.443836-5.610959-29.457535-15.430137-7.013699-9.819178-7.013699-22.443836-2.805479-33.665753l29.457534-67.331507c0-1.40274 1.40274-1.40274 1.40274-2.805479 1.40274-2.805479 4.208219-7.013699 5.610959-11.221918v-1.40274c2.805479-7.013699 2.805479-14.027397 2.805479-21.041096 0-37.873973-30.860274-68.734247-68.734246-68.734246s-68.734247 30.860274-68.734247 68.734246c0 7.013699 1.40274 14.027397 2.80548 19.638356 1.40274 7.013699 5.610959 12.624658 8.416438 18.235617 1.40274 1.40274 1.40274 2.805479 2.805479 4.208219l28.054795 60.317808c5.610959 11.221918 4.208219 23.846575-1.40274 33.665754s-18.235616 16.832877-29.457534 16.832876H294.575342v274.936987c0 11.221918-5.610959 22.443836-15.430137 29.457534-9.819178 7.013699-22.443836 7.013699-33.665753 2.805479L192.175342 589.150685c-1.40274 0-1.40274-1.40274-2.805479-1.40274-2.805479-1.40274-7.013699-4.208219-11.221918-5.610959h-1.40274c-7.013699-2.805479-14.027397-2.805479-21.041095-2.805479-37.873973 0-68.734247 30.860274-68.734247 68.734246s30.860274 68.734247 68.734247 68.734247c7.013699 0 14.027397-1.40274 19.638356-2.805479 7.013699-1.40274 12.624658-5.610959 18.235616-8.416439 1.40274-1.40274 2.805479-1.40274 4.208219-2.805479l46.290411-22.443836c11.221918-5.610959 23.846575-4.208219 33.665754 1.40274 9.819178 7.013699 16.832877 18.235616 16.832876 29.457534v235.660274z" p-id="5142"></path></svg>
  ),
  publish: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3439"
      width="16"
      height="16"
    >
      <path
        d="M864 128h-56.64a32 32 0 0 0 0 64H864a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h62.272a32 32 0 0 0 0-64H160a96 96 0 0 0-96 96v640a96 96 0 0 0 96 96h704a96 96 0 0 0 96-96V224a96 96 0 0 0-96-96z"
        p-id="3440"
      ></path>
      <path
        d="M341.216 308.32L480 185.312V688a32 32 0 0 0 64 0V185.312l138.784 123.008a32.032 32.032 0 0 0 42.464-47.904l-192-170.208a32 32 0 0 0-42.464 0l-192 170.208a32 32 0 1 0 42.432 47.904z"
        p-id="3441"
      ></path>
    </svg>
  ),
  preview: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2412"
      width="16"
      height="16"
    >
      <path
        d="M512.737804 743.56089c239.125169 0 352.993566-182.187389 381.457852-233.428424-34.156938-51.240011-167.954223-236.278331-381.457852-236.278331-241.96689 2.849908-361.52794 190.730972-387.146411 236.278331C148.363026 558.526663 247.998257 743.56089 512.737804 743.56089M512.737804 772.026198c-321.673234 0-418.461627-261.893732-418.461627-261.893732s125.252679-261.897825 418.461627-261.897825c264.74364 0 415.619906 261.897825 415.619906 261.897825S805.949822 772.026198 512.737804 772.026198L512.737804 772.026198 512.737804 772.026198 512.737804 772.026198zM512.737804 772.026198"
        p-id="2413"
      ></path>
      <path
        d="M512.737804 624.000863c62.630433 0 113.868397-51.241035 113.868397-113.868397s-51.236941-113.868397-113.868397-113.868397c-62.626339 0-113.867374 51.241035-113.867374 113.868397S450.110441 624.000863 512.737804 624.000863M512.737804 652.464125c-79.70532 0-142.332682-62.626339-142.332682-142.332682 0-79.709413 62.626339-142.336776 142.332682-142.336776 79.709413 0 142.336776 62.626339 142.336776 142.336776C655.073556 589.837786 592.447217 652.464125 512.737804 652.464125L512.737804 652.464125 512.737804 652.464125 512.737804 652.464125zM512.737804 652.464125"
        p-id="2414"
      ></path>
    </svg>
  ),
  translate: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3113"
      width="24"
      height="24"
    >
      <path
        d="M608 416h288c35.36 0 64 28.48 64 64v416c0 35.36-28.48 64-64 64H480c-35.36 0-64-28.48-64-64v-288H128c-35.36 0-64-28.48-64-64V128c0-35.36 28.48-64 64-64h416c35.36 0 64 28.48 64 64v288z m0 64v64c0 35.36-28.48 64-64 64h-64v256.032c0 17.664 14.304 31.968 31.968 31.968H864a31.968 31.968 0 0 0 31.968-31.968V512a31.968 31.968 0 0 0-31.968-31.968H608zM128 159.968V512c0 17.664 14.304 31.968 31.968 31.968H512a31.968 31.968 0 0 0 31.968-31.968V160A31.968 31.968 0 0 0 512.032 128H160A31.968 31.968 0 0 0 128 159.968z m64 244.288V243.36h112.736V176h46.752c6.4 0.928 9.632 1.824 9.632 2.752a10.56 10.56 0 0 1-1.376 4.128c-2.752 7.328-4.128 16.032-4.128 26.112v34.368h119.648v156.768h-50.88v-20.64h-68.768v118.272H306.112v-118.272H238.752v24.768H192z m46.72-122.368v60.48h67.392V281.92H238.752z m185.664 60.48V281.92h-68.768v60.48h68.768z m203.84 488H576L668.128 576h64.64l89.344 254.4h-54.976l-19.264-53.664h-100.384l-19.232 53.632z m33.024-96.256h72.864l-34.368-108.608h-1.376l-37.12 108.608zM896 320h-64a128 128 0 0 0-128-128V128a192 192 0 0 1 192 192zM128 704h64a128 128 0 0 0 128 128v64a192 192 0 0 1-192-192z"
        fill="#333333"
        p-id="3114"
      ></path>
    </svg>
  ),
  color: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4098"
      width="24"
      height="24"
    >
      <path
        d="M475.2 903.2c-16.8 0-34.4-1.6-53.6-4l-4.8-0.8c-136-20.8-228.8-152.8-232.8-158.4-131.2-200-65.6-402.4 58.4-514.4 123.2-112 328.8-160 508.8-15.2C867.2 304 902.4 433.6 904 439.2v1.6c16.8 91.2 3.2 158.4-40.8 201.6-67.2 64.8-178.4 44-193.6 40.8-20.8-2.4-36 4-47.2 17.6-12 15.2-14.4 35.2-10.4 47.2 11.2 33.6 12.8 59.2 4.8 78.4-23.2 50.4-70.4 76.8-141.6 76.8z m-51.2-52.8l4.8 0.8c77.6 12 124.8-3.2 144-46.4 0-0.8 4-11.2-6.4-43.2-10.4-28.8-2.4-66.4 18.4-92 21.6-27.2 53.6-39.2 91.2-35.2l2.4 0.8c0.8 0 100 21.6 151.2-28 31.2-30.4 40.8-83.2 27.2-156.8-3.2-10.4-37.6-123.2-136.8-202.4-156.8-128-336.8-85.6-445.6 12.8C174.4 352 100.8 525.6 224 713.6c0.8 0 84.8 120 200 136.8z"
        fill="#999999"
        p-id="4099"
      ></path>
      <path
        d="M284 526.4m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
        fill="#999999"
        p-id="4100"
      ></path>
      <path
        d="M340 382.4m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
        fill="#999999"
        p-id="4101"
      ></path>
      <path
        d="M484 302.4m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
        fill="#999999"
        p-id="4102"
      ></path>
      <path
        d="M644 342.4m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
        fill="#999999"
        p-id="4103"
      ></path>
      <path
        d="M724 470.4m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
        fill="#999999"
        p-id="4104"
      ></path>
    </svg>
  ),
  theme: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5080"
      width="24"
      height="24"
    >
      <path
        d="M507.733333 529.066667l76.8 136.533333 115.2-106.666667 153.6-34.133333L789.333333 384l17.066667-153.6-153.6 17.066667L512 183.466667l-34.133333 153.6-106.666667 115.2 136.533333 76.8z m-46.933333 21.333333l-157.866667-89.6 132.266667-145.066667 42.666667-192 179.2 81.066667 196.266666-25.6-21.333333 196.266667 81.066667 179.2-192 42.666666-145.066667 132.266667-85.333333-149.333333-281.6 281.6-29.866667-29.866667 281.6-281.6z"
        fill="#444444"
        p-id="5081"
      ></path>
    </svg>
  ),
  setting: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2370"
      width="16"
      height="16"
    >
      <path
        d="M510.37806 337.803609c-98.010221 0-177.748287 78.842673-177.748287 175.75284 0 96.91426 79.738066 175.763073 177.748287 175.763073 9.537214 0 19.620873-0.978281 31.797194-3.088338 18.196431-3.281743 30.290887-20.538779 26.963095-38.471197-2.924609-15.732309-16.693194-27.152407-32.747845-27.152407-2.071172 0-4.15974 0.196475-6.123464 0.563842-7.937786 1.402953-14.233166 2.056845-19.807115 2.056845-61.159942 0-110.915136-49.201585-110.915136-109.671819 0-60.467163 49.679469-109.661585 110.747313-109.661585 61.116963 0 110.832248 49.194422 110.832248 109.661585 0 5.892197-0.656963 12.0832-2.088568 19.531845-3.327792 17.928325 8.769734 35.189454 26.959002 38.464033 2.006703 0.360204 4.045129 0.546446 6.070252 0.546446 16.204054 0 30.019711-11.43033 32.832779-27.116591 2.13871-11.45182 3.13848-21.435195 3.13848-31.41857 0.042979-46.873564-18.435884-90.990341-52.033074-124.223233C602.407056 356.106464 557.790906 337.803609 510.37806 337.803609z"
        p-id="2371"
      ></path>
      <path
        d="M938.476161 432.79917c-2.185782-11.426237-11.037381-20.499893-22.563902-23.12058-41.909505-9.508561-76.781734-34.929534-98.185206-71.550593-21.334911-36.560684-26.191522-79.099523-13.68979-119.709429 3.52836-11.123338 0.007163-23.235191-8.951883-30.840402-41.860387-35.721573-89.536222-62.938448-141.695163-80.885192-3.152806-1.088798-6.437619-1.639337-9.776667-1.639337-8.256034 0-16.182564 3.431146-21.724791 9.376555-29.236881 31.04404-68.840878 48.140417-111.5107 48.140417-42.673915 0-82.305541-17.125029-111.607914-48.230468-7.877411-8.333806-20.510126-11.512195-31.580253-7.726985-52.483328 18.171871-100.131535 45.416376-141.640927 80.988546-8.815783 7.591909-12.322653 19.620873-8.934486 30.67258 12.586666 40.645722 7.759731 83.180468-13.597693 119.78106-21.306258 36.5965-56.149834 62.006216-98.17395 71.561849-11.540847 2.709715-20.396539 11.812023-22.559808 23.166629-5.228071 27.169803-7.877411 54.346769-7.877411 80.770582 0 26.426883 2.64934 53.603849 7.873318 80.763418 2.174526 11.411911 11.023054 20.488637 22.552645 23.12058 41.913599 9.512654 76.785827 34.922371 98.19237 71.547523 21.349237 36.59343 26.177196 79.128175 13.583366 119.795387-3.363607 10.969842 0.121773 23.013133 8.973372 30.758538 41.84913 35.707246 89.494267 62.920028 141.662417 80.902588 11.466146 3.885494 23.738657 0.549515 31.454386-7.680936 29.29828-31.091112 68.925812-48.216141 111.593588-48.216141s82.302471 17.125029 111.560842 48.183396c5.556553 5.955642 13.494339 9.380648 21.782096 9.380648 3.27765 0 6.537903-0.520863 9.829879-1.599428 52.126194-17.968234 99.774401-45.184085 141.652184-80.912821 8.791224-7.577582 12.308327-19.628036 8.94165-30.758538-12.597923-40.678468-7.745405-83.20605 13.672394-119.773897 21.324678-36.625152 56.192813-62.030775 98.19237-71.547523 11.390421-2.592035 20.23588-11.633968 22.549575-23.106254 5.223978-27.184129 7.870248-54.358025 7.870248-80.770582C946.342316 487.171522 943.697069 459.965903 938.476161 432.79917zM728.572524 789.878798c-26.02677 20.157085-54.736649 36.553521-85.487 48.818869-36.682457-32.144094-83.60207-49.779753-132.792399-49.779753-48.926316 0-95.838765 17.635659-132.767839 49.786916-30.744211-12.262278-59.45716-28.655643-85.491093-48.812729 9.894348-47.441499 1.889023-96.449679-22.763446-138.627291-24.448832-41.966811-63.427588-73.339332-110.186542-88.840374-2.381234-16.343223-3.584642-32.758078-3.584642-48.869011 0-16.043395 1.203408-32.451086 3.584642-48.851615 46.612621-15.389502 85.584214-46.758953 110.186542-88.850607 24.523533-42.024116 32.525788-91.033319 22.74912-138.620128 26.0237-20.149922 54.735625-36.543288 85.494163-48.815799 36.821627 32.201399 83.73817 49.861618 132.778072 49.861618 49.194422 0 96.109941-17.635659 132.792399-49.779753 30.751375 12.269441 59.45716 28.662807 85.48086 48.812729-9.809413 47.63388-1.835811 96.634898 22.667256 138.620128 24.445762 41.966811 63.416332 73.343425 110.182448 88.850607 2.381234 16.386202 3.584642 32.801057 3.584642 48.940642 0.143263 15.443737-1.031493 31.797194-3.499707 48.701189-46.763047 15.504112-85.73771 46.873564-110.186542 88.836281C726.84416 693.189665 718.845998 742.190683 728.572524 789.878798z"
        p-id="2372"
      ></path>
    </svg>
  ),
  logout: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3059"
      width="16"
      height="16"
    >
      <path
        d="M959.488 512L704 256.448V448H448v128h256v191.552L959.488 512zM192 192h512V128H128v768h576v-64H192V192z"
        fill=""
        p-id="3060"
      ></path>
    </svg>
  ),
  about: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4024"
      width="16"
      height="16"
    >
      <path
        d="M512 640v-170.666667h-42.666667v-42.666666h85.333334v213.333333h42.666666v42.666667h-128v-42.666667h42.666667z m21.333333 256C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333zM554.666667 341.333333v42.666667h-42.666667V341.333333h42.666667z"
        fill="#444444"
        p-id="4025"
      ></path>
    </svg>
  ),
};

const DynamicIcon = (props: DynamicSvgProps) => {
  return (
    <span role="img" className="anticon">
      {loadIcon(props.type)}
    </span>
  );

  // <Icon component={dSvgWithArgs} {...props} />
};

export default DynamicIcon;
