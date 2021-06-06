// import {Image}  from '@chakra-ui/react'
import Image from "next/image"
import Link from 'next/link'
import {Box, Center, Flex} from "@chakra-ui/react"
import { useState } from "react"

const ToHome = (props) => {
    const [color, setColor] = useState("#FFFFF")
    const handleColor = () => {
        if (color == "#FFFFF"){
            setColor("#A9A9A9");
        }else {
            setColor("#FFFFF")
        }
    } 
    return(
        <Center>
            <Box  onMouseEnter={()=>handleColor()} onMouseLeave={()=>handleColor()}>
            <Link href="/"  >
                {/* <Image src="/icons/homeOwl.png" height={200} width={200} title="Go to Home" alt="HOME"></Image> */}
                <svg cursor="pointer" version="1.0" xmlns="http://www.w3.org/2000/svg"     
                    width="128pt" height="71,8pt" viewBox="0 0 1280.000000 718.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <title>Go to Home</title>
                    <metadata>
                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                <defs>
                    {/* <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" > 
                        <stop offset="0%" stop-color="#FFFFFF">
                            <animate attributeName="stop-color" values="#FFFFFF; #000000; #FFFFFF " dur="4s" repeatCount="indefinite"></animate>
                        </stop>
                        <stop offset="100%" stop-color="#000000">
                            <animate attributeName="stop-color" values="#000000; #FFFFFF; #000000" dur="4s" repeatCount="indefinite"></animate>
                        </stop>
                    </linearGradient>  */}
                    <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" > 
                        <stop offset="0%" stopColor="#7A5FFF">
                            <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
                        </stop>
                        <stop offset="100%" stopColor="#01FF89">
                            <animate attributeName="stop-color" values="#01FF89; #7A5FFF; #01FF89" dur="4s" repeatCount="indefinite"></animate>
                        </stop>
                    </linearGradient> 
                </defs>
                    <g fill="url(#logo-gradient)" transform="translate(0.000000,718.000000) scale(0.100000,-0.100000)"
                     stroke="none">
                    <path  d="M390 7154 c0 -26 43 -178 68 -241 42 -104 132 -272 201 -376 64 -95
                    86 -147 63 -147 -18 0 -129 42 -270 102 -284 120 -370 181 -429 303 l-25 50 6
                    -80 c19 -281 140 -532 390 -808 109 -121 128 -145 122 -156 -15 -24 -248 68
                    -315 124 -19 16 -43 43 -53 60 l-20 30 5 -70 c10 -163 130 -410 305 -630 132
                    -165 345 -348 532 -455 132 -76 136 -86 48 -143 -66 -42 -123 -106 -178 -198
                    -23 -38 -55 -85 -71 -103 l-29 -34 67 -43 c349 -220 460 -273 651 -310 35 -6
                    73 -20 85 -29 l22 -18 -35 -28 c-96 -79 -136 -129 -174 -219 -21 -49 -49 -110
                    -62 -134 -13 -24 -23 -46 -20 -48 2 -2 34 -12 72 -23 37 -11 129 -49 204 -84
                    74 -36 165 -73 200 -82 94 -25 254 -21 405 9 66 14 123 23 128 20 12 -7 8 -40
                    -14 -89 -32 -76 -36 -159 -10 -242 11 -38 21 -89 21 -112 l0 -41 26 20 c34 27
                    46 26 146 -5 69 -22 93 -25 143 -19 115 14 128 12 141 -15 61 -122 84 -186 84
                    -230 l0 -48 32 15 c29 15 38 15 131 -6 61 -14 113 -20 135 -16 36 6 39 4 125
                    -91 56 -62 87 -104 87 -119 0 -23 1 -23 29 -9 23 12 39 12 78 4 26 -7 72 -9
                    101 -5 l53 7 84 -82 c46 -45 89 -95 95 -111 14 -33 25 -37 34 -13 5 14 21 15
                    121 9 111 -7 115 -7 159 19 24 14 49 26 54 26 6 0 29 -15 51 -34 22 -19 71
                    -44 107 -56 36 -12 81 -36 100 -53 34 -29 35 -29 49 -11 8 11 15 22 15 26 0 4
                    13 14 30 23 24 12 49 14 125 9 l95 -7 50 53 c40 41 56 51 73 46 12 -3 52 -10
                    88 -16 36 -5 73 -12 81 -15 11 -4 18 2 22 20 4 15 44 66 90 115 88 92 107 129
                    121 233 10 77 -13 228 -71 456 -73 288 -94 395 -94 481 0 97 16 155 55 196 28
                    29 39 34 79 34 76 0 86 -18 79 -137 -7 -122 11 -356 38 -488 11 -55 49 -176
                    84 -270 35 -94 71 -208 80 -255 59 -313 7 -557 -171 -792 -34 -46 -137 -164
                    -229 -263 -337 -364 -412 -502 -355 -654 13 -35 20 -74 18 -91 -3 -17 0 -30 6
                    -30 6 0 36 -13 66 -30 35 -19 70 -29 97 -30 34 0 45 -5 60 -27 10 -14 55 -63
                    100 -107 77 -76 104 -121 88 -145 -8 -14 -4 -14 38 4 28 11 61 13 163 7 l128
                    -7 23 -40 c12 -22 53 -65 90 -96 79 -64 100 -98 82 -130 -10 -20 -9 -21 7 -15
                    43 17 74 17 133 2 97 -25 148 -21 201 14 25 16 51 30 58 30 8 0 32 -13 55 -29
                    23 -16 62 -35 87 -41 93 -23 160 -63 160 -97 0 -7 5 -13 10 -13 6 0 10 6 10
                    13 0 16 47 61 75 71 11 5 45 14 75 22 30 8 74 28 97 44 51 37 68 37 117 0 32
                    -24 49 -30 92 -30 29 0 65 5 80 10 36 14 121 17 159 6 29 -9 30 -9 12 11 -24
                    28 -10 61 43 104 90 73 118 100 130 129 14 33 44 46 88 37 15 -3 62 -1 105 5
                    67 10 83 9 113 -5 19 -10 37 -17 39 -17 3 0 5 17 5 37 0 33 9 45 90 124 50 48
                    90 92 90 97 0 12 46 32 73 32 12 0 54 14 94 32 60 28 71 36 67 53 -3 11 4 49
                    15 85 31 96 27 152 -12 235 -45 93 -130 203 -277 360 -316 336 -402 460 -462
                    672 -18 63 -22 105 -23 213 0 158 16 249 76 420 130 370 139 414 145 705 3
                    116 7 220 10 232 5 27 56 43 99 32 65 -18 105 -101 105 -216 0 -84 -30 -250
                    -90 -495 -70 -284 -86 -390 -71 -484 13 -83 45 -138 120 -203 35 -30 68 -70
                    80 -96 12 -25 25 -43 30 -40 11 6 159 28 184 27 10 0 38 -21 61 -46 l42 -46
                    111 0 111 0 31 -35 31 -36 38 30 c20 16 65 39 100 51 34 13 83 38 109 56 48
                    34 54 34 111 1 29 -17 44 -19 146 -12 109 7 114 6 129 -15 15 -21 15 -21 26
                    11 6 18 48 69 94 113 l82 81 120 0 c66 -1 128 -4 138 -9 14 -7 17 -3 17 23 0
                    25 15 48 76 113 82 90 93 97 140 91 17 -2 67 5 112 16 96 25 108 25 146 6 15
                    -8 29 -15 30 -15 1 0 0 20 -2 45 -4 43 16 99 82 235 13 27 21 28 146 15 55 -6
                    77 -3 145 19 77 26 127 27 140 5 12 -19 25 -8 25 22 0 17 10 62 21 101 30 98
                    23 186 -21 274 -46 89 -39 94 97 58 97 -26 124 -29 263 -29 178 0 200 5 371
                    91 97 48 187 82 262 98 l27 6 -19 28 c-11 15 -41 76 -68 137 -48 111 -83 156
                    -181 237 -51 42 -35 54 118 87 140 31 228 71 462 212 174 105 216 134 203 142
                    -9 5 -46 55 -82 111 -78 120 -141 189 -204 221 -82 42 -75 55 83 147 134 78
                    252 171 378 297 123 123 197 216 275 345 94 155 165 350 165 455 l0 46 -19
                    -30 c-26 -44 -77 -84 -153 -120 -71 -34 -194 -72 -204 -62 -10 10 14 42 97
                    133 253 277 386 544 405 813 l6 86 -27 -52 c-35 -68 -122 -147 -221 -200 -95
                    -49 -399 -172 -449 -180 -25 -4 -35 -2 -35 7 0 8 36 69 81 137 106 161 171
                    291 214 425 32 100 54 198 44 198 -3 0 -23 -26 -46 -58 -128 -175 -398 -314
                    -1028 -527 -322 -109 -690 -260 -1255 -516 -152 -69 -301 -150 -457 -249 -47
                    -30 -46 -3 1 201 65 282 75 333 71 337 -14 14 -281 -160 -373 -244 -83 -75
                    -125 -138 -215 -327 -63 -132 -86 -168 -136 -221 -130 -135 -428 -315 -742
                    -449 -280 -119 -605 -212 -669 -192 -35 11 -50 66 -57 203 -6 142 9 254 52
                    389 13 43 25 83 25 90 0 20 -71 -6 -170 -63 -69 -40 -175 -77 -265 -95 -90
                    -17 -312 -17 -540 -1 -144 10 -221 10 -385 0 -113 -7 -281 -13 -375 -12 -154
                    1 -178 3 -258 27 -48 15 -133 50 -190 78 -113 57 -177 82 -177 70 0 -5 9 -37
                    21 -72 36 -112 49 -181 55 -289 7 -114 -8 -284 -27 -306 -18 -22 -121 -17
                    -236 11 -369 89 -962 384 -1178 586 -80 75 -111 123 -175 273 -58 137 -113
                    219 -199 299 -62 57 -209 158 -315 218 l-59 33 7 -50 c3 -27 28 -145 56 -262
                    43 -186 51 -242 33 -242 -10 0 -68 34 -131 76 -97 65 -237 134 -585 288 -375
                    166 -559 241 -867 352 -608 219 -791 294 -943 386 -119 71 -185 126 -235 193
                    -55 75 -52 72 -52 49z"/>
                    </g>
                    </svg>
            </Link>
            </Box>
            </Center>
    )
}

export default ToHome;