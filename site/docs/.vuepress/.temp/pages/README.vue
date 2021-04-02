<template><!-- > With no typescript support   -->
<!-- <quill-editor
    v-model:value="state.content"
    :options="state.editorOption"
    :disabled="state.disabled"
  /> -->
<component
  v-if="state.dynamicComponent"
  :is="state.dynamicComponent"
  v-model:value="state.content"
  :options="state.editorOption"
  :disabled="state.disabled"
></component>
<p><b>Content:</b></p>
<p>{{ state.content }}</p>
<hr>
<h2 id="get-started"><a class="header-anchor" href="#get-started">#</a> Get started</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vue3-quill
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> vue3-quill
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Global Registration:</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> quillEditor<span class="token punctuation">,</span> Quill <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue3-quill'</span>
<span class="token keyword">import</span> customQuillModule <span class="token keyword">from</span> <span class="token string">'customQuillModule'</span>
Quill<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'modules/customQuillModule'</span><span class="token punctuation">,</span> customQuillModule<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>quillEditor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>or Local Registration:</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> quillEditor<span class="token punctuation">,</span> Quill <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue3-quill'</span>
<span class="token keyword">import</span> customQuillModule <span class="token keyword">from</span> <span class="token string">'customQuillModule'</span>
Quill<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'modules/customQuillModule'</span><span class="token punctuation">,</span> customQuillModule<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    quillEditor
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>Example:</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicComponent<span class="token punctuation">"</span></span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamicComponent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>quill-editor</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state.content<span class="token punctuation">"</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state.editorOption<span class="token punctuation">"</span></span>
    <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state.disabled<span class="token punctuation">"</span></span>
    <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEditorBlur($event)<span class="token punctuation">"</span></span>
    <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEditorFocus($event)<span class="token punctuation">"</span></span>
    <span class="token attr-name">@ready</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEditorReady($event)<span class="token punctuation">"</span></span>
    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEditorChange($event)<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> quillEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue3-quill'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    quillEditor
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      dynamicComponent<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span> <span class="token string">'&lt;p>2333&lt;/p>'</span><span class="token punctuation">,</span>
      _content<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      editorOption<span class="token operator">:</span> <span class="token punctuation">{</span>
        placeholder<span class="token operator">:</span> <span class="token string">'core'</span><span class="token punctuation">,</span>
        modules<span class="token operator">:</span> <span class="token punctuation">{</span>
          toolbar<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// custom toolbars options</span>
            <span class="token comment">// will override the default configuration</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token comment">// other moudle options here</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// more options</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      disabled<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onEditorBlur</span> <span class="token operator">=</span> <span class="token parameter">quill</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'editor blur!'</span><span class="token punctuation">,</span> quill<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onEditorFocus</span> <span class="token operator">=</span> <span class="token parameter">quill</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'editor focus!'</span><span class="token punctuation">,</span> quill<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onEditorReady</span> <span class="token operator">=</span> <span class="token parameter">quill</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'editor ready!'</span><span class="token punctuation">,</span> quill<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onEditorChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> quill<span class="token punctuation">,</span> html<span class="token punctuation">,</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'editor change!'</span><span class="token punctuation">,</span> quill<span class="token punctuation">,</span> html<span class="token punctuation">,</span> text<span class="token punctuation">)</span>
      state<span class="token punctuation">.</span>_content <span class="token operator">=</span> html
    <span class="token punctuation">}</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> onEditorBlur<span class="token punctuation">,</span> onEditorFocus<span class="token punctuation">,</span> onEditorReady<span class="token punctuation">,</span> onEditorChange <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><h1 id="options"><a class="header-anchor" href="#options">#</a> Options</h1>
<h2 id="form-input-bindings-v-model"><a class="header-anchor" href="#form-input-bindings-v-model">#</a> Form Input Bindings: v-model</h2>
<p>The v-model directive can be used to create a two-way data binding. For example:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>quill-editor</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state.content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>quill-editor</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="event-binding"><a class="header-anchor" href="#event-binding">#</a> Event binding</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>quill-editor</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state.content<span class="token punctuation">"</span></span>
    <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEditorBlur($event)<span class="token punctuation">"</span></span>
    <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEditorFocus($event)<span class="token punctuation">"</span></span>
    <span class="token attr-name">@ready</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEditorReady($event)<span class="token punctuation">"</span></span>
    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEditorChange($event)<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>The following events are available:</p>
<ul>
<li>blur</li>
<li>focus</li>
<li>ready</li>
<li>change</li>
</ul>
<h2 id="options-prop"><a class="header-anchor" href="#options-prop">#</a> options prop</h2>
<ul>
<li><strong>options</strong><br>
Apply the default options by not passing this prop.<br>
The options passed in will override the default preset options.<br>
For example:<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>modules<span class="token operator">:</span> <span class="token punctuation">{</span>
  toolbar<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>this option will generate an empty toolbar.<br>
Check the offical doc <a href="https://quilljs.com/docs/configuration/" target="_blank" rel="noopener noreferrer">Quill Documentation<OutboundLink/></a> for all options.</li>
<li><strong>disabled</strong><br>
<strong>Default:</strong> <code>false</code><br>
Set <code>true</code> to disabled the editor.</li>
</ul>
<h1 id="default-quill-options"><a class="header-anchor" href="#default-quill-options">#</a> Default Quill options</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>modules<span class="token operator">:</span> <span class="token punctuation">{</span>
  toolbar<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'bold'</span><span class="token punctuation">,</span> <span class="token string">'italic'</span><span class="token punctuation">,</span> <span class="token string">'underline'</span><span class="token punctuation">,</span> <span class="token string">'strike'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'blockquote'</span><span class="token punctuation">,</span> <span class="token string">'code-block'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span> header<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> header<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span> list<span class="token operator">:</span> <span class="token string">'ordered'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> list<span class="token operator">:</span> <span class="token string">'bullet'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span> script<span class="token operator">:</span> <span class="token string">'sub'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> script<span class="token operator">:</span> <span class="token string">'super'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span> indent<span class="token operator">:</span> <span class="token string">'-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> indent<span class="token operator">:</span> <span class="token string">'+1'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span> direction<span class="token operator">:</span> <span class="token string">'rtl'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span> size<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'small'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">'large'</span><span class="token punctuation">,</span> <span class="token string">'huge'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span> header<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span> font<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span> align<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'clean'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token string">'image'</span><span class="token punctuation">,</span> <span class="token string">'video'</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h1 id="packages"><a class="header-anchor" href="#packages">#</a> Packages</h1>
<p>Borrowing from: <a href="https://github.com/surmon-china/vue-quill-editor" target="_blank" rel="noopener noreferrer">vue-quill-editor<OutboundLink/></a>  Inspired by this one</p>
<p><a href="https://www.npmjs.com/package/quill-image-uploader" target="_blank" rel="noopener noreferrer">Quill ImageHandler Module<OutboundLink/></a><br>
...</p>
</template>

<script>
import { reactive, onMounted } from 'vue'
// import { quillEditor } from 'vue3-quill'

export default {
  components: {
    // quillEditor
  },
  setup() {
    const state = reactive({
      dynamicComponent: null,
      content: '<p>2333</p>',
      _content: '',
      editorOption: {
        placeholder: 'core',
        modules: {
          // toolbar: [
            // custom toolbars options
            // will override the default configuration
          // ],
          // custom moudle here
        }
        // more options
      },
      disabled: false
    })

    onMounted(() => {
      import('vue3-quill').then(module => {
        state.dynamicComponent = module.default.quillEditor
      })
    })

    return {
      state
    }
  }
}
</script>
