import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,b as a,aH as p}from"./framework.0718b91c.js";const y='{"title":"\u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u53D8\u91CF\u5217\u8868","slug":"\u53D8\u91CF\u5217\u8868"}],"relativePath":"guide/concept/theme.md","lastUpdated":1683709375191}',t={},o=p(`<h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 css \u53D8\u91CF\u5B9A\u5236\u4E3B\u9898</p><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u9700\u8981\u5728\u9879\u76EE\u4E2D\u624B\u52A8\u5F15\u5165</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;@minij/lemon/css/themes/default.css&quot;</span><span class="token punctuation">;</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6839\u636E\u4E1A\u52A1\u53EF\u4EE5\u81EA\u884C\u5728\u9879\u76EE\u4E2D\u8986\u76D6\u5BF9\u5E94\u53D8\u91CF\uFF0C\u4ECE\u800C\u6539\u53D8\u4E3B\u9898</p></div><h2 id="\u53D8\u91CF\u5217\u8868" tabindex="-1">\u53D8\u91CF\u5217\u8868 <a class="header-anchor" href="#\u53D8\u91CF\u5217\u8868" aria-hidden="true">#</a></h2><div class="language-css"><pre><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u989C\u8272
     **/</span>
    <span class="token comment">/* \u4E3B\u9898\u8272 */</span>
    <span class="token property">--primary</span><span class="token punctuation">:</span> #f01d24<span class="token punctuation">;</span>
    <span class="token property">--primary-text</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--primary-press</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--primary-disable</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>240<span class="token punctuation">,</span> 29<span class="token punctuation">,</span> 36<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--primary-selected</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--text-selected</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* \u8F85\u52A9\u8272 */</span>
    <span class="token property">--warning</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--success</span><span class="token punctuation">:</span> #1dbf6e<span class="token punctuation">;</span>
    <span class="token property">--link</span><span class="token punctuation">:</span> #2c7ff7<span class="token punctuation">;</span>
    <span class="token property">--label-stroke</span><span class="token punctuation">:</span> #f78e91<span class="token punctuation">;</span> <span class="token comment">/* \u6807\u7B7E\u63CF\u8FB9 */</span>
    <span class="token property">--background-notice</span><span class="token punctuation">:</span> #fff2bd<span class="token punctuation">;</span>
    <span class="token property">--background-warning</span><span class="token punctuation">:</span> #fef2f2<span class="token punctuation">;</span>

    <span class="token comment">/* \u4E2D\u6027\u8272 */</span>
    <span class="token property">--text-title</span><span class="token punctuation">:</span> #1b1c33<span class="token punctuation">;</span>
    <span class="token property">--text-body</span><span class="token punctuation">:</span> #5e5e66<span class="token punctuation">;</span>
    <span class="token property">--text-caption</span><span class="token punctuation">:</span> #8d8e99<span class="token punctuation">;</span> <span class="token comment">/* \u8F85\u52A9\u6587\u5B57 */</span>
    <span class="token property">--text-hint</span><span class="token punctuation">:</span> #b0b1b8<span class="token punctuation">;</span> <span class="token comment">/* \u9884\u8F93\u5165\u6587\u5B57 */</span>
    <span class="token property">--text-anti</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span> <span class="token comment">/* \u53CD\u767D\u6587\u5B57 */</span>
    <span class="token property">--stroke</span><span class="token punctuation">:</span> #e3e3e6<span class="token punctuation">;</span> <span class="token comment">/* \u5361\u7247\u63CF\u8FB9 */</span>
    <span class="token property">--line</span><span class="token punctuation">:</span> #ededf0<span class="token punctuation">;</span> <span class="token comment">/* \u4E0B\u5212\u7EBF */</span>
    <span class="token property">--background-page</span><span class="token punctuation">:</span> #f7f8fa<span class="token punctuation">;</span> <span class="token comment">/* \u9875\u9762\u80CC\u666F\u8272 */</span>
    <span class="token property">--background-block</span><span class="token punctuation">:</span> #f2f3f5<span class="token punctuation">;</span> <span class="token comment">/* \u7EC4\u4EF6\u80CC\u666F\u8272 */</span>
    <span class="token property">--mask</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--mask1</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--mask2</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* \u5176\u4ED6 */</span>
    <span class="token property">--font-highlight</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span> <span class="token comment">/* \u4E3B\u8272\u586B\u5145\u65F6\u6587\u5B57\u989C\u8272 */</span>
    <span class="token property">--primary-highlight</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* \u9AD8\u4EAE\u4E3B\u8272\u80CC\u666F\u4E0B\u6587\u5B57\u989C\u8272 */</span>
    <span class="token property">--primary-disable-select-color</span><span class="token punctuation">:</span> #ffd2c2<span class="token punctuation">;</span> <span class="token comment">/* \u7981\u7528\u65F6\u9009\u4E2D\u6001\u6587\u5B57\u8272 */</span>

    <span class="token comment">/**
     * \u5B57\u4F53
     **/</span>
    <span class="token comment">/* todo ITC Avant Garde Gothic Std\u5B57\u4F53\u5305\u7684\u5BFC\u5165 */</span>
    <span class="token property">--font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;ITC Avant Garde Gothic Std&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PingFang SC&quot;</span><span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span>
        <span class="token string">&quot;Droid Sans&quot;</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>

    <span class="token comment">/* \u5B57\u91CD */</span>
    <span class="token property">--font-weight-regular</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
    <span class="token property">--font-weight-medium</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
    <span class="token property">--font-weight-semibold</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>

    <span class="token comment">/* \u5B57\u53F7 */</span>
    <span class="token property">--font-size-important</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
    <span class="token property">--font-size-regular</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">--font-size-module-title</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
    <span class="token property">--font-size-title</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">--font-size-content</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">--font-size-desc</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
    <span class="token property">--font-size-tabbar</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>

    <span class="token comment">/**
     * \u5706\u89D2
     **/</span>
    <span class="token property">--border-radius-large</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token property">--border-radius-medium</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">--border-radius-small</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
    <span class="token property">--border-radius-mini</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">--border-radius-half</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>

    <span class="token comment">/**
     * \u9634\u5F71
     **/</span>
    <span class="token property">--box-shadow-important</span><span class="token punctuation">:</span> 0 8px 24px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.04<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* \u91CD\u8981\u9634\u5F71 */</span>
    <span class="token property">--box-shadow-bottom</span><span class="token punctuation">:</span> 0 -1px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.08<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* \u5E95\u90E8\u9634\u5F71 */</span>
    <span class="token property">--box-shadow-top</span><span class="token punctuation">:</span> 0 1px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.08<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* \u5E95\u90E8\u9634\u5F71 */</span>
    <span class="token property">--box-shadow-common</span><span class="token punctuation">:</span> 0 0 12px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.06<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* \u901A\u7528\u9634\u5F71 */</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),c=[o];function e(u,l,i,k,r,m){return s(),a("div",null,c)}var h=n(t,[["render",e]]);export{y as __pageData,h as default};
