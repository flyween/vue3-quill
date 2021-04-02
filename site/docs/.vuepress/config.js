module.exports = {
  lang: 'en-US',
  title: 'vue3-quill',
  description: 'Quill editor for vue3 project.',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png'
  },
  plugins: ['@vuepress/back-to-top'],
  // head: [
  //   [
  //     'script',
  //     {
  //       src: 'https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js',
  //       defer: 'defer'
  //     }
  //   ],
  //   [
  //     'script',
  //     {
  //       src: 'https://www.gstatic.com/firebasejs/8.3.2/firebase-analytics.js',
  //       defer: 'defer'
  //     }
  //   ],
  //   [
  //     'script',
  //     {
  //       src: 'https://www.gstatic.com/firebasejs/8.3.2/firebase-performance.js',
  //       defer: 'defer'
  //     }
  //   ],
  //   [
  //     'script',
  //     { defer: 'defer' },
  //     `var firebaseConfig = {
  //   apiKey: "AIzaSyBEsGC3PTqELqdsInEDMFOcK6Czv3ez2_c",
  //   authDomain: "vue3-quill.firebaseapp.com",
  //   projectId: "vue3-quill",
  //   storageBucket: "vue3-quill.appspot.com",
  //   messagingSenderId: "1016236747430",
  //   appId: "1:1016236747430:web:4fe6df9131b1777dbc2267",
  //   measurementId: "G-E4LK2LLMGN"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  // var perf = firebase.performance();`
  //   ]
  // ],
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
      config.output.publicPath = '/vue3-quill'
    }
  }
}
