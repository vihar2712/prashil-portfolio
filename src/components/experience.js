import data from "../myData.json";

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container text-center">
        <h1 className="mb-4">Experience</h1>
        <div className="section-title">
          {data.workExperience.map((work, id) => {
            return (
              <div key={id} className="blog-card">
                <div className="blog-card-header">
                  <img
                    src={work.photo}
                    className="blog-card-img about-img"
                    alt=""
                  />
                </div>
                <div className="blog-card-body">
                  <h4 className="blog-card-title">{work.position}</h4>
                  <h5 className="blog-card-title">{work.companyName}</h5>
                  <p className="text-body mb-1">
                    {work.startYear} - {work.endYear}
                  </p>
                  <ul>
                    {work.desc.map((info, index) => (
                      <li
                        key={index}
                        className="text-primary"
                        style={{ fontSize: "15px" }}
                      >
                        {info}
                      </li>
                    ))}
                  </ul>
                  {work.showCar && (
                    <div class="hero-right">
                      <div class="car-wrap">
                        <div class="tl-label tl-l1">⚡ Efficiency +15%</div>
                        <div class="tl-label tl-l2">🏆 #1 India · #5 Asia</div>
                        <div class="tl-label t1-l5">📊 227 km/kWh</div>
                        <svg
                          class="car-svg"
                          viewBox="0 0 580 240"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="cGrad"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stop-color="#695aa6"
                                stop-opacity="0.82"
                              />
                              <stop
                                offset="100%"
                                stop-color="#695aa6"
                                stop-opacity="0.62"
                              />
                            </linearGradient>
                            <linearGradient
                              id="cGrad2"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                stop-color="#695aa6"
                                stop-opacity="0.9"
                              />
                              <stop
                                offset="50%"
                                stop-color="#695aa6"
                                stop-opacity="1.0"
                              />
                              <stop
                                offset="100%"
                                stop-color="#695aa6"
                                stop-opacity="0.9"
                              />
                            </linearGradient>
                            <linearGradient
                              id="glowU"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stop-color="#695aa6"
                                stop-opacity="0.5"
                              />
                              <stop
                                offset="100%"
                                stop-color="#695aa6"
                                stop-opacity="0"
                              />
                            </linearGradient>
                            <radialGradient
                              id="hlGrad"
                              cx="50%"
                              cy="0%"
                              r="60%"
                            >
                              <stop
                                offset="0%"
                                stop-color="#695aa6"
                                stop-opacity="0.5"
                              />
                              <stop
                                offset="100%"
                                stop-color="#695aa6"
                                stop-opacity="0"
                              />
                            </radialGradient>
                            <filter
                              id="gGlow"
                              x="-20%"
                              y="-20%"
                              width="140%"
                              height="140%"
                            >
                              <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="5"
                                result="blur"
                              />
                              <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <filter
                              id="softGl"
                              x="-30%"
                              y="-30%"
                              width="160%"
                              height="160%"
                            >
                              <feGaussianBlur stdDeviation="10" />
                            </filter>
                            <clipPath id="cc">
                              <rect x="0" y="0" width="580" height="240" />
                            </clipPath>
                            <mask id="bodymask">
                              <path
                                d="M 52,182 C 52,166 63,156 82,148 L 112,138 C 122,124 134,112 155,100
                     L 192,84 C 215,70 242,60 272,56 L 310,54 C 342,54 372,62 398,76
                     L 430,92 C 450,104 464,118 476,134 L 496,142 C 514,150 526,162 528,178
                     L 529,188 C 529,194 524,198 517,198 L 494,198
                     C 492,183 484,172 472,166 C 460,160 446,158 432,162
                     C 418,166 407,178 405,192 L 404,198
                     L 172,198 L 171,192 C 168,178 157,166 143,162
                     C 129,158 115,160 103,166 C 91,172 83,183 81,198
                     L 60,198 C 54,198 52,194 52,188 Z"
                                fill="white"
                              />
                            </mask>
                          </defs>

                          <ellipse
                            cx="290"
                            cy="206"
                            rx="210"
                            ry="12"
                            fill="#695aa6"
                            opacity="0.1"
                          />
                          <ellipse
                            cx="290"
                            cy="200"
                            rx="200"
                            ry="20"
                            fill="url(#glowU)"
                            opacity="0.55"
                          >
                            <animate
                              attributeName="rx"
                              values="185;215;185"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.45;0.7;0.45"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </ellipse>

                          <g clip-path="url(#cc)" opacity="0.35">
                            <line
                              x1="10"
                              y1="122"
                              x2="60"
                              y2="122"
                              stroke="url(#cGrad2)"
                              stroke-width="1.2"
                            >
                              <animate
                                attributeName="x1"
                                values="60;-40;60"
                                dur="1.1s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="x2"
                                values="120;10;120"
                                dur="1.1s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="opacity"
                                values="0;0.7;0"
                                dur="1.1s"
                                repeatCount="indefinite"
                              />
                            </line>
                            <line
                              x1="10"
                              y1="138"
                              x2="48"
                              y2="138"
                              stroke="#695aa6"
                              stroke-width="0.9"
                            >
                              <animate
                                attributeName="x1"
                                values="48;-32;48"
                                dur="0.95s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="x2"
                                values="95;5;95"
                                dur="0.95s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="opacity"
                                values="0;0.6;0"
                                dur="0.95s"
                                repeatCount="indefinite"
                              />
                            </line>
                            <line
                              x1="10"
                              y1="154"
                              x2="55"
                              y2="154"
                              stroke="#695aa6"
                              stroke-width="0.7"
                            >
                              <animate
                                attributeName="x1"
                                values="55;-25;55"
                                dur="1.3s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="x2"
                                values="100;10;100"
                                dur="1.3s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="opacity"
                                values="0;0.5;0"
                                dur="1.3s"
                                repeatCount="indefinite"
                              />
                            </line>
                          </g>

                          <path
                            d="M 52,182 C 52,166 63,156 82,148 L 112,138 C 122,124 134,112 155,100
                 L 192,84 C 215,70 242,60 272,56 L 310,54 C 342,54 372,62 398,76
                 L 430,92 C 450,104 464,118 476,134 L 496,142 C 514,150 526,162 528,178
                 L 529,188 C 529,194 524,198 517,198 L 494,198
                 C 492,183 484,172 472,166 C 460,160 446,158 432,162
                 C 418,166 407,178 405,192 L 404,198
                 L 172,198 L 171,192 C 168,178 157,166 143,162
                 C 129,158 115,160 103,166 C 91,172 83,183 81,198
                 L 60,198 C 54,198 52,194 52,188 Z"
                            fill="url(#cGrad)"
                            stroke="#695aa6"
                            stroke-width="1.5"
                            filter="url(#gGlow)"
                          />

                          <path
                            d="M 155,100 C 185,84 218,68 255,60 L 310,56 C 348,56 378,66 405,82
                 L 432,98 C 408,86 374,76 338,72 L 278,70 C 242,70 212,78 182,92 Z"
                            fill="url(#hlGrad)"
                            opacity="0.35"
                          />

                          <path
                            d="M 160,108 C 190,92 222,80 260,74 L 312,72 C 348,72 378,80 406,94 L 434,108"
                            stroke="#695aa6"
                            stroke-width="1.8"
                            fill="none"
                            opacity="0.55"
                            stroke-linecap="round"
                          />

                          <path
                            d="M 196,88 C 220,68 248,56 278,52 L 316,50 C 348,50 376,60 398,76
                 L 420,92 C 400,80 374,72 340,68 L 278,66 C 244,66 216,76 192,92 Z"
                            fill="#070C1A"
                            stroke="#695aa6"
                            stroke-width="1"
                            opacity="0.92"
                          />
                          <path
                            d="M 198,90 C 216,72 238,60 262,56 L 282,54 L 274,88 Z"
                            fill="#695aa6"
                            opacity="0.14"
                            stroke="#695aa6"
                            stroke-width="0.8"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M 320,54 L 350,56 C 372,60 392,70 410,84 L 390,90 Z"
                            fill="#695aa6"
                            opacity="0.12"
                            stroke="#695aa6"
                            stroke-width="0.8"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M 276,54 L 318,54 L 316,90 L 278,90 Z"
                            fill="#695aa6"
                            opacity="0.1"
                            stroke="#695aa6"
                            stroke-width="0.8"
                          />
                          <line
                            x1="278"
                            y1="90"
                            x2="268"
                            y2="144"
                            stroke="#695aa6"
                            stroke-width="0.8"
                            opacity="0.4"
                          />
                          <line
                            x1="316"
                            y1="90"
                            x2="326"
                            y2="144"
                            stroke="#695aa6"
                            stroke-width="0.8"
                            opacity="0.4"
                          />

                          <path
                            d="M 200,100 L 212,144"
                            stroke="#695aa6"
                            stroke-width="0.6"
                            opacity="0.3"
                          />
                          <path
                            d="M 380,100 L 366,144"
                            stroke="#695aa6"
                            stroke-width="0.6"
                            opacity="0.3"
                          />

                          <path
                            d="M 74,155 L 92,143 L 98,158 L 80,166 Z"
                            fill="#695aa6"
                            opacity="0.85"
                          />
                          <ellipse
                            cx="78"
                            cy="155"
                            rx="9"
                            ry="6"
                            fill="#695aa6"
                            opacity="0.9"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.9;1.0;0.9"
                              dur="2.2s"
                              repeatCount="indefinite"
                            />
                          </ellipse>
                          <path
                            d="M 52,128 L 78,148 L 78,164 L 52,190"
                            fill="#695aa6"
                            opacity="0.05"
                            filter="url(#softGl)"
                          />

                          <path
                            d="M 58,154 L 76,146"
                            stroke="#695aa6"
                            stroke-width="2"
                            stroke-linecap="round"
                            opacity="0.7"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.7;1.0;0.7"
                              dur="1.8s"
                              repeatCount="indefinite"
                            />
                          </path>

                          <path
                            d="M 500,155 L 520,148 L 522,164 L 500,168 Z"
                            fill="#695aa6"
                            opacity="0.82"
                          />
                          <ellipse
                            cx="517"
                            cy="157"
                            rx="7"
                            ry="5"
                            fill="#695aa6"
                            opacity="0.9"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.9;0.5;0.9"
                              dur="1.4s"
                              repeatCount="indefinite"
                            />
                          </ellipse>
                          <path
                            d="M 505,162 L 522,155"
                            stroke="#695aa6"
                            stroke-width="2"
                            stroke-linecap="round"
                            opacity="0.6"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.6;1.0;0.6"
                              dur="1.4s"
                              repeatCount="indefinite"
                            />
                          </path>

                          <path
                            d="M 56,174 L 90,164 L 92,172 L 56,182 Z"
                            fill="#695aa6"
                            opacity="0.28"
                          />
                          <path
                            d="M 488,170 L 524,163 L 525,172 L 488,178 Z"
                            fill="#695aa6"
                            opacity="0.28"
                          />

                          <circle
                            cx="144"
                            cy="198"
                            r="36"
                            fill="#040810"
                            stroke="#695aa6"
                            stroke-width="2"
                          />
                          <circle
                            cx="144"
                            cy="198"
                            r="28"
                            fill="#040810"
                            stroke="#695aa6"
                            stroke-width="0.8"
                            opacity="0.45"
                          />
                          <circle
                            cx="144"
                            cy="198"
                            r="20"
                            fill="#040810"
                            stroke="#695aa6"
                            stroke-width="0.5"
                            opacity="0.25"
                          />
                          <g
                            style={{
                              transformOrigin: "144px 198px",
                              transformBox: "fill-box",
                              animation: "spinW 2.4s linear infinite",
                            }}
                          >
                            <line
                              x1="144"
                              y1="170"
                              x2="144"
                              y2="182"
                              stroke="#695aa6"
                              stroke-width="2.2"
                              stroke-linecap="round"
                            />
                            <line
                              x1="144"
                              y1="214"
                              x2="144"
                              y2="226"
                              stroke="#695aa6"
                              stroke-width="2.2"
                              stroke-linecap="round"
                            />
                            <line
                              x1="116"
                              y1="198"
                              x2="128"
                              y2="198"
                              stroke="#695aa6"
                              stroke-width="2.2"
                              stroke-linecap="round"
                            />
                            <line
                              x1="160"
                              y1="198"
                              x2="172"
                              y2="198"
                              stroke="#695aa6"
                              stroke-width="2.2"
                              stroke-linecap="round"
                            />
                            <line
                              x1="124"
                              y1="178"
                              x2="132"
                              y2="186"
                              stroke="#695aa6"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              opacity="0.65"
                            />
                            <line
                              x1="156"
                              y1="210"
                              x2="164"
                              y2="218"
                              stroke="#695aa6"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              opacity="0.65"
                            />
                            <line
                              x1="164"
                              y1="178"
                              x2="156"
                              y2="186"
                              stroke="#695aa6"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              opacity="0.65"
                            />
                            <line
                              x1="124"
                              y1="210"
                              x2="132"
                              y2="218"
                              stroke="#695aa6"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              opacity="0.65"
                            />
                          </g>
                          <circle
                            cx="144"
                            cy="198"
                            r="9"
                            fill="#695aa6"
                            opacity="0.95"
                          />
                          <circle cx="144" cy="198" r="4" fill="#DBEAFE" />

                          <circle
                            cx="432"
                            cy="198"
                            r="36"
                            fill="#040810"
                            stroke="#695aa6"
                            stroke-width="2"
                          />
                          <circle
                            cx="432"
                            cy="198"
                            r="28"
                            fill="#040810"
                            stroke="#695aa6"
                            stroke-width="0.8"
                            opacity="0.45"
                          />
                          <circle
                            cx="432"
                            cy="198"
                            r="20"
                            fill="#040810"
                            stroke="#695aa6"
                            stroke-width="0.5"
                            opacity="0.25"
                          />
                          <g
                            style={{
                              transformOrigin: "432px 198px",
                              transformBox: "fill-box",
                              animation: "spinW 2.4s linear infinite",
                            }}
                          >
                            <line
                              x1="432"
                              y1="170"
                              x2="432"
                              y2="182"
                              stroke="#695aa6"
                              stroke-width="2.2"
                              stroke-linecap="round"
                            />
                            <line
                              x1="432"
                              y1="214"
                              x2="432"
                              y2="226"
                              stroke="#695aa6"
                              stroke-width="2.2"
                              stroke-linecap="round"
                            />
                            <line
                              x1="404"
                              y1="198"
                              x2="416"
                              y2="198"
                              stroke="#695aa6"
                              stroke-width="2.2"
                              stroke-linecap="round"
                            />
                            <line
                              x1="448"
                              y1="198"
                              x2="460"
                              y2="198"
                              stroke="#695aa6"
                              stroke-width="2.2"
                              stroke-linecap="round"
                            />
                            <line
                              x1="412"
                              y1="178"
                              x2="420"
                              y2="186"
                              stroke="#695aa6"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              opacity="0.65"
                            />
                            <line
                              x1="444"
                              y1="210"
                              x2="452"
                              y2="218"
                              stroke="#695aa6"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              opacity="0.65"
                            />
                            <line
                              x1="452"
                              y1="178"
                              x2="444"
                              y2="186"
                              stroke="#695aa6"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              opacity="0.65"
                            />
                            <line
                              x1="412"
                              y1="210"
                              x2="420"
                              y2="218"
                              stroke="#695aa6"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              opacity="0.65"
                            />
                          </g>
                          <circle
                            cx="432"
                            cy="198"
                            r="9"
                            fill="#695aa6"
                            opacity="0.95"
                          />
                          <circle cx="432" cy="198" r="4" fill="#C7D2FE" />

                          <path
                            d="M 108,158 C 116,144 128,136 144,132 C 160,128 174,134 184,146"
                            stroke="#695aa6"
                            stroke-width="1"
                            fill="none"
                            opacity="0.38"
                          />
                          <path
                            d="M 396,146 C 406,134 420,128 432,132 C 444,136 456,144 465,158"
                            stroke="#695aa6"
                            stroke-width="1"
                            fill="none"
                            opacity="0.38"
                          />

                          <rect
                            x="-90"
                            y="48"
                            width="80"
                            height="166"
                            rx="2"
                            fill="url(#cGrad2)"
                            opacity="0.07"
                            clip-path="url(#cc)"
                          >
                            <animateTransform
                              attributeName="transform"
                              type="translate"
                              values="-90 0; 680 0; -90 0"
                              dur="4.5s"
                              repeatCount="indefinite"
                            />
                          </rect>

                          <circle cx="220" cy="80" r="2.5" fill="#4F8EF7">
                            <animate
                              attributeName="opacity"
                              values="0.2;1;0.2"
                              dur="2.0s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle cx="290" cy="60" r="2" fill="#818CF8">
                            <animate
                              attributeName="opacity"
                              values="0.2;1;0.2"
                              dur="1.7s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle cx="370" cy="80" r="2.5" fill="#4F8EF7">
                            <animate
                              attributeName="opacity"
                              values="0.2;1;0.2"
                              dur="2.3s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle cx="310" cy="130" r="1.8" fill="#7AABFF">
                            <animate
                              attributeName="opacity"
                              values="0.15;0.8;0.15"
                              dur="1.4s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle cx="250" cy="126" r="1.8" fill="#A5B4FC">
                            <animate
                              attributeName="opacity"
                              values="0.15;0.8;0.15"
                              dur="1.9s"
                              repeatCount="indefinite"
                            />
                          </circle>

                          <rect
                            x="248"
                            y="104"
                            width="80"
                            height="22"
                            rx="4"
                            fill="rgba(79,142,247,0.1)"
                            stroke="#fff"
                            stroke-width="0.8"
                            opacity="0.8"
                          />
                          <text
                            x="288"
                            y="119"
                            text-anchor="middle"
                            fill="#fff"
                            font-family="DM Mono, monospace"
                            font-size="8"
                            letter-spacing="1"
                          >
                            227 km/kWh
                          </text>
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* <a href={work.link} className="blog-card-link">
                      See Live Demo <i className="ti-angle-double-right"></i>
                    </a> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Experience;
