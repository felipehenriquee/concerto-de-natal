import { defineAsyncComponent } from "vue";

export class Components {
  static Navbar(): any {
    return defineAsyncComponent(
      () => import("./InitalComponent/Navbar.vue")
    );
  }
}
