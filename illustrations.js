// 看圖說故事插畫：每課一張原創純 SVG 插畫（純幾何圖形手繪，非照片、無版權疑慮）。
// 統一 viewBox="0 0 480 280"，直接以 innerHTML 塞入畫面，內容固定由本檔案提供、不含使用者輸入，
// 不需要另外跑 escapeHtml。

const ILLUSTRATIONS = {
  // 第7課：晚上約在捷運站門口見面，一起去KTV
  "l7-ktv": `
<svg viewBox="0 0 480 280" role="img" aria-labelledby="l7-ktv-title">
  <title id="l7-ktv-title">晚上兩個人約在捷運站門口，準備一起去KTV</title>
  <rect width="480" height="280" fill="#332a52"/>
  <rect width="480" height="280" fill="url(#l7-sky)"/>
  <defs>
    <linearGradient id="l7-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3c3160"/>
      <stop offset="1" stop-color="#6b4a6e"/>
    </linearGradient>
  </defs>
  <circle cx="410" cy="50" r="26" fill="#fbe8a6"/>
  <circle cx="60" cy="40" r="2" fill="#fff"/>
  <circle cx="120" cy="70" r="2" fill="#fff"/>
  <circle cx="200" cy="35" r="2" fill="#fff"/>
  <circle cx="300" cy="60" r="2" fill="#fff"/>
  <circle cx="350" cy="30" r="2" fill="#fff"/>
  <!-- KTV 建築 -->
  <rect x="20" y="90" width="150" height="150" fill="#241d3d"/>
  <rect x="35" y="105" width="30" height="30" fill="#f2c94c"/>
  <rect x="80" y="105" width="30" height="30" fill="#f2c94c"/>
  <rect x="125" y="105" width="30" height="30" fill="#f2c94c"/>
  <rect x="35" y="150" width="30" height="30" fill="#f2c94c"/>
  <rect x="80" y="150" width="30" height="30" fill="#f2c94c"/>
  <rect x="125" y="150" width="30" height="30" fill="#f2c94c"/>
  <rect x="30" y="70" width="130" height="26" rx="6" fill="#e8557a"/>
  <text x="95" y="89" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="800" fill="#fff">KTV</text>
  <path d="M170 240 L170 120 L200 120 L200 240 Z" fill="#241d3d"/>
  <!-- 音符 -->
  <text x="185" y="60" font-family="sans-serif" font-size="26" fill="#f2c94c">&#9835;</text>
  <text x="215" y="95" font-family="sans-serif" font-size="20" fill="#fbe8a6">&#9834;</text>
  <!-- 捷運站入口 -->
  <rect x="330" y="170" width="70" height="70" rx="8" fill="#22314f"/>
  <circle cx="365" cy="192" r="16" fill="#2f6ea8"/>
  <text x="365" y="198" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="800" fill="#fff">M</text>
  <text x="365" y="222" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#e6e6e6">捷運站</text>
  <!-- 兩個人 -->
  <g>
    <circle cx="245" cy="205" r="14" fill="#f4c9a1"/>
    <rect x="231" y="219" width="28" height="42" rx="10" fill="#d9782b"/>
  </g>
  <g>
    <circle cx="285" cy="205" r="14" fill="#f4c9a1"/>
    <rect x="271" y="219" width="28" height="42" rx="10" fill="#2f9e6a"/>
  </g>
  <!-- 時鐘 -->
  <circle cx="430" cy="140" r="30" fill="#fffaf3" stroke="#2f2a26" stroke-width="3"/>
  <line x1="430" y1="140" x2="430" y2="120" stroke="#2f2a26" stroke-width="3" stroke-linecap="round"/>
  <line x1="430" y1="140" x2="444" y2="148" stroke="#2f2a26" stroke-width="3" stroke-linecap="round"/>
  <text x="430" y="185" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#fbe8a6">7:30 pm</text>
</svg>`,

  // 第8課：坐火車去臺南，夕陽下的小吃與老街
  "l8-train": `
<svg viewBox="0 0 480 280" role="img" aria-labelledby="l8-train-title">
  <title id="l8-train-title">傍晚坐火車去臺南，準備吃小吃、逛老街、看夕陽</title>
  <rect width="480" height="280" fill="url(#l8-sky)"/>
  <defs>
    <linearGradient id="l8-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffcf8a"/>
      <stop offset="0.6" stop-color="#ff9d76"/>
      <stop offset="1" stop-color="#f2708a"/>
    </linearGradient>
  </defs>
  <circle cx="380" cy="150" r="46" fill="#fff3c4"/>
  <rect x="0" y="220" width="480" height="60" fill="#3a2e2a"/>
  <!-- 鐵軌 -->
  <line x1="0" y1="236" x2="480" y2="236" stroke="#1f1b18" stroke-width="4"/>
  <line x1="0" y1="252" x2="480" y2="252" stroke="#1f1b18" stroke-width="4"/>
  <g stroke="#6b5a4e" stroke-width="4">
    <line x1="10" y1="234" x2="10" y2="254"/>
    <line x1="50" y1="234" x2="50" y2="254"/>
    <line x1="90" y1="234" x2="90" y2="254"/>
    <line x1="130" y1="234" x2="130" y2="254"/>
    <line x1="170" y1="234" x2="170" y2="254"/>
    <line x1="210" y1="234" x2="210" y2="254"/>
    <line x1="250" y1="234" x2="250" y2="254"/>
    <line x1="290" y1="234" x2="290" y2="254"/>
    <line x1="330" y1="234" x2="330" y2="254"/>
    <line x1="370" y1="234" x2="370" y2="254"/>
    <line x1="410" y1="234" x2="410" y2="254"/>
    <line x1="450" y1="234" x2="450" y2="254"/>
  </g>
  <!-- 火車 -->
  <rect x="60" y="150" width="220" height="60" rx="14" fill="#2f6ea6"/>
  <path d="M280 150 Q310 150 310 180 L310 210 L280 210 Z" fill="#2f6ea6"/>
  <rect x="80" y="164" width="26" height="22" rx="4" fill="#eaf6ff"/>
  <rect x="118" y="164" width="26" height="22" rx="4" fill="#eaf6ff"/>
  <rect x="156" y="164" width="26" height="22" rx="4" fill="#eaf6ff"/>
  <rect x="194" y="164" width="26" height="22" rx="4" fill="#eaf6ff"/>
  <rect x="232" y="164" width="26" height="22" rx="4" fill="#eaf6ff"/>
  <circle cx="100" cy="216" r="12" fill="#241d3d"/>
  <circle cx="160" cy="216" r="12" fill="#241d3d"/>
  <circle cx="240" cy="216" r="12" fill="#241d3d"/>
  <!-- 老街招牌與小吃攤 -->
  <rect x="330" y="150" width="120" height="70" fill="#c96b3f"/>
  <rect x="330" y="140" width="120" height="14" fill="#8a4a2b"/>
  <text x="390" y="180" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="800" fill="#fffaf3">臺南老街</text>
  <ellipse cx="360" cy="205" rx="14" ry="8" fill="#fffaf3"/>
  <ellipse cx="390" cy="205" rx="14" ry="8" fill="#fffaf3"/>
  <text x="360" y="209" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#c9472f">小吃</text>
</svg>`,

  // 第9課：放假計畫，行李箱、飛機、去東京還是海邊
  "l9-vacation": `
<svg viewBox="0 0 480 280" role="img" aria-labelledby="l9-vacation-title">
  <title id="l9-vacation-title">還沒決定放假要去東京，還是去海邊休息</title>
  <rect width="480" height="280" fill="#cfe8fa"/>
  <circle cx="60" cy="50" r="26" fill="#fff5cf"/>
  <g fill="#ffffff">
    <ellipse cx="120" cy="60" rx="30" ry="14"/>
    <ellipse cx="145" cy="55" rx="22" ry="12"/>
    <ellipse cx="330" cy="40" rx="34" ry="16"/>
    <ellipse cx="360" cy="35" rx="24" ry="12"/>
  </g>
  <!-- 飛機 -->
  <g transform="translate(240,90) rotate(18)">
    <path d="M0 0 L70 6 L86 0 L70 -6 Z" fill="#2f6ea6"/>
    <path d="M22 -4 L10 -24 L20 -24 L34 -4 Z" fill="#2f6ea6"/>
    <path d="M22 4 L10 24 L20 24 L34 4 Z" fill="#2f6ea6"/>
    <path d="M0 0 L-14 -6 L-14 6 Z" fill="#2f6ea6"/>
  </g>
  <!-- 路牌：左邊東京、右邊海邊 -->
  <rect x="220" y="170" width="10" height="80" fill="#8a6a4e"/>
  <path d="M120 170 L232 170 L216 190 L120 190 Z" fill="#d9782b"/>
  <text x="176" y="184" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="800" fill="#fff">東京</text>
  <path d="M228 200 L340 200 L340 220 L228 220 Z" fill="#2f9e6a"/>
  <text x="284" y="215" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="800" fill="#fff">海邊</text>
  <!-- 問號 -->
  <text x="225" y="150" text-anchor="middle" font-family="sans-serif" font-size="34" font-weight="800" fill="#c9472f">？</text>
  <!-- 行李箱 -->
  <rect x="40" y="180" width="80" height="70" rx="10" fill="#e8557a"/>
  <rect x="60" y="166" width="40" height="16" rx="6" fill="none" stroke="#e8557a" stroke-width="6"/>
  <rect x="40" y="210" width="80" height="8" fill="#c9472f"/>
  <circle cx="55" cy="256" r="6" fill="#2f2a26"/>
  <circle cx="105" cy="256" r="6" fill="#2f2a26"/>
  <!-- 海浪（海邊選項的示意） -->
  <path d="M330 255 Q345 245 360 255 T390 255 T420 255 T450 255" fill="none" stroke="#2f6ea6" stroke-width="4" stroke-linecap="round"/>
</svg>`,

  // 第10課：水果攤，芒果、荔枝、鳳梨
  "l10-fruit": `
<svg viewBox="0 0 480 280" role="img" aria-labelledby="l10-fruit-title">
  <title id="l10-fruit-title">水果店的攤子上擺著芒果、荔枝和鳳梨</title>
  <rect width="480" height="280" fill="#fffaf3"/>
  <!-- 攤子遮陽棚 -->
  <path d="M40 60 L440 60 L440 90 L40 90 Z" fill="#d9782b"/>
  <g fill="#fffaf3">
    <path d="M40 90 L70 90 L55 112 Z"/>
    <path d="M100 90 L130 90 L115 112 Z"/>
    <path d="M160 90 L190 90 L175 112 Z"/>
    <path d="M220 90 L250 90 L235 112 Z"/>
    <path d="M280 90 L310 90 L295 112 Z"/>
    <path d="M340 90 L370 90 L355 112 Z"/>
    <path d="M400 90 L430 90 L415 112 Z"/>
  </g>
  <!-- 攤台 -->
  <rect x="30" y="190" width="420" height="70" fill="#c98a4e"/>
  <rect x="30" y="182" width="420" height="12" fill="#a86b36"/>
  <!-- 芒果 -->
  <ellipse cx="120" cy="175" rx="30" ry="24" fill="#f2a541" transform="rotate(-12 120 175)"/>
  <path d="M112 152 Q124 140 138 150" fill="none" stroke="#2f9e6a" stroke-width="5" stroke-linecap="round"/>
  <!-- 荔枝（三顆一叢） -->
  <circle cx="235" cy="168" r="15" fill="#e0607a"/>
  <circle cx="258" cy="178" r="15" fill="#e0607a"/>
  <circle cx="246" cy="192" r="15" fill="#e0607a"/>
  <path d="M242 150 Q252 138 264 148" fill="none" stroke="#2f9e6a" stroke-width="5" stroke-linecap="round"/>
  <!-- 鳳梨 -->
  <ellipse cx="360" cy="185" rx="26" ry="34" fill="#e8c34a"/>
  <path d="M352 151 Q360 130 368 151" fill="none" stroke="#e8c34a" stroke-width="0"/>
  <g fill="#4f8f52">
    <path d="M360 151 L346 118 L356 130 Z"/>
    <path d="M360 151 L360 112 L360 132 Z"/>
    <path d="M360 151 L374 118 L364 130 Z"/>
  </g>
  <g stroke="#c9a02f" stroke-width="2">
    <line x1="338" y1="168" x2="382" y2="168"/>
    <line x1="336" y1="185" x2="384" y2="185"/>
    <line x1="338" y1="202" x2="382" y2="202"/>
  </g>
  <!-- 價格牌 -->
  <rect x="60" y="215" width="60" height="30" rx="4" fill="#fff"/>
  <text x="90" y="235" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#2f2a26">芒果</text>
  <rect x="220" y="215" width="60" height="30" rx="4" fill="#fff"/>
  <text x="250" y="235" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#2f2a26">荔枝</text>
  <rect x="340" y="215" width="60" height="30" rx="4" fill="#fff"/>
  <text x="370" y="235" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#2f2a26">鳳梨</text>
</svg>`,
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ILLUSTRATIONS };
} else {
  window.ILLUSTRATIONS = ILLUSTRATIONS;
}
