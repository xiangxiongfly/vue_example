import XtxImageView from "./XtxImageView/index.vue";

export const componentPlugin = {
  install(app) {
    app.component("XtxImageView", XtxImageView);
  }
};
