import { Store } from "@/store";

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    token: String;
  }
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
