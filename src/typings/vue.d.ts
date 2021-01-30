import Vue from 'vue';

declare module 'vue/types/vue' {
  // add instance property and method
  interface Vue {
    $instanceProperty: string;
    $instanceMethod(): void;
  }

  // add static property and method
  interface VueConstructor {
    staticProperty: string;
    staticMethod(): void;
  }
}

// augment ComponentOptions
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    foo?: string;
  }
}

const vm = new Vue({
  props: ['bar'],
  data() {
    return {
      a: true,
    };
  },
  foo: 'foo',
  methods: {
    foo() {
      this.a = false;
    },
  },
  computed: {
    BAR(): string {
      return this.bar.toUpperCase();
    },
  },
});

vm.$instanceProperty;
vm.$instanceMethod();

Vue.staticProperty;
Vue.staticMethod();
