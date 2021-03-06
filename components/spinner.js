import * as React from 'react';
import { useState } from "react";
import {Flex, Image , Text} from "@chakra-ui/react"
import MysteryQuestion from "./mysteryQuestion"
import Link from "next/link"
import styleUtil from '../styles/utils.module.css'

const Spinner = (props) => {
    const [space, setSpace] = useState(false);
    const [rotation, setRotation] = useState(30);
    const [rotation2, setRotation2] = useState(30);
    const [text, setText] = useState("");
    const [mysteryQuestion, setMysteryQuestion] = useState(false);
    const [joke,setJoke] = useState(false);

    // rotation disturbance
    const Space = () =>{
        setText("");
        if (space) {
            setRotation(30);
            setRotation2(30);
            setSpace(false);
        }else{
            setRotation(3);
            setRotation2(1);
            setSpace(true);
        }
    }

    const handleMaouseEnter = (textInput) => {
        setText(textInput);
    }
    const handleMaouseLeave = (textInput) => {
        setText("");
    }

    const handleQuestion = () => {
        mysteryQuestion == false ? setMysteryQuestion(true) : setMysteryQuestion(false);
    }

    const handleJoke =  e => {
        joke ? setJoke(false) : setJoke(true);
    }
            // <Image className={styleUtil.reverse} borderRadius="10%" border="2px" borderColor="black" height={{lg: "70vh", base: "70vw"}} width={{lg: "100vh", base: "90vw"}} src="/images/moto2.jpg"/>
    return(
        // Glocal Flex -> Rox direction 
        <>
        <Flex alignItems="center" justifyContent="center" onClick={()=>handleJoke()} display={joke ? "flex" : "none"}>
        <Text>BLAGUE</Text>
        </Flex>
        <Flex onClick={()=>handleQuestion()} display={mysteryQuestion == true ? "flex" : "none"}>
      {/* <MysteryQuestion/> */}
       <MysteryQuestion/>
            <Text>MQ</Text>
        </Flex>
        <Text display={mysteryQuestion == true ? "none" : "block"} alignSelf="center" fontSize="5xl" color="white" fontFamily="cursive"  position="absolute" >{text}</Text>
        <Flex display={mysteryQuestion || joke  ? "none" : "flex"} alignSelf="center" style={{animation: `spin ${rotation}s linear infinite`}} flexDirection="row" cursor="pointer">
            {/* Left icons */}
            <Flex flexDirection="column" justifyContent="space-evenly">
                <Flex boxSize={{lg:"10vh"}} onMouseEnter={(textInput)=>handleMaouseEnter("Mystery Question")} onMouseLeave={() => handleMaouseLeave()} onClick={()=>handleQuestion()}>
                    <Image className={styleUtil.reverse} position="relative" top={{lg: "4vh"}} left={{lg: "4vh"}} style={{animation: `reversespin ${rotation2}s linear infinite`}} src="/icons/contour-de-dessin-anime-de-hibou.svg"   height={{ base: 7, md: 25, lg:50 }} width={{ base: 7, md: 25, lg:50 }} />
                </Flex>
                <Flex boxSize={{lg:"10vh"}} onMouseEnter={(textInput)=>handleMaouseEnter("Linkedin")} onMouseLeave={() => handleMaouseLeave()} >
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/basile-nonclercq/">
                        <Image className={styleUtil.reverse} position="relative" left={{lg: "4vh"}} style={{animation: `reversespin ${rotation2}s linear infinite`}}   src="/icons/logo-linkedin.svg" height={{ base: 7, md: 25, lg:50 }} width={{ base: 7, md: 25, lg:50 }} />
                    </a>
                </Flex>
            </Flex>
            {/* Middle Flex -> Column direction */}
            <Flex alignSelf="center"  flexDirection="column" >
                {/* top icons */}
                <Flex alignSelf="center"  w="100%" justifyContent="space-around">
                    <Flex boxSize={{lg:"10vh"}} onMouseEnter={(textInput)=>handleMaouseEnter("Github")} onMouseLeave={() => handleMaouseLeave()} >
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/BasileNq">
                            <Image className={styleUtil.reverse} position="relative" top={{lg: "4vh"}} left={{lg: "4vh"}} style={{animation: `reversespin ${rotation2}s linear infinite`}}  src="/icons/signe-github.svg" height={{ base: 7, md: 25, lg:50 }} width={{ base: 7, md: 25, lg:50 }} />
                        </a>
                    </Flex>
                    <Flex boxSize={{lg:"10vh"}} onMouseEnter={(textInput)=>handleMaouseEnter("4L Trophy")} onMouseLeave={() => handleMaouseLeave()}  >
                        <Link href="/4ltrophy">
                            <Image className={styleUtil.reverse} position="relative" top={{lg: "4vh"}} style={{animation: `reversespin ${rotation2}s linear infinite`}}   src="/icons/contour-de-vue-cote-hibou.svg" height={{ base: 7, md: 25, lg:50 }} width={{ base: 7, md: 25, lg:50 }} />
                        </Link>
                    </Flex>
                </Flex>
                {/* cricle */}
                <Flex borderRadius="full" alignSelf="center" onMouseEnter={(textInput)=>handleMaouseEnter("SPACE")} onMouseLeave={() => handleMaouseLeave()}>
                    <Image className={styleUtil.reverse} style={{animation: `reversespin ${rotation2}s linear infinite`}} src="/icons/circle.svg" onClick={()=>Space()} height={{ base: 200, md: 300, lg:500 }} width={{ base: 200, md: 300, lg:500 }} />
                </Flex>
                {/* bottom icons */}
                <Flex alignSelf="center"  w="100%" justifyContent="space-around">
                    <Flex boxSize={{lg:"10vh"}} onMouseEnter={(textInput)=>handleMaouseEnter("Joke")} onMouseLeave={() => handleMaouseLeave()}  >
                        <Image className={styleUtil.reverse} position="relative" left={{lg: "4vh"}} onClick={()=>handleJoke()} style={{animation: `reversespin ${rotation2}s linear infinite`}}  src="/icons/hibou.svg" height={{ base: 7, md: 25, lg:50 }} width={{ base: 7, md: 25, lg:50 }} />
                    </Flex>
                    <Flex boxSize={{lg:"10vh"}} onMouseEnter={(textInput)=>handleMaouseEnter("Work Blog")} onMouseLeave={() => handleMaouseLeave()}  >
                        <Link href="/work-blog/"> 
                            <Image className={styleUtil.reverse} position="relative" style={{animation: `reversespin ${rotation2}s linear infinite`}}  src="/icons/blog.svg" height={{ base: 7, md: 25, lg:50 }} width={{ base: 7, md: 25, lg:50 }} />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            {/* right icons */}
            <Flex flexDirection="column" justifyContent="space-evenly">
                <Flex boxSize={{lg:"10vh"}} onMouseEnter={(textInput)=>handleMaouseEnter("Resume")} onMouseLeave={() => handleMaouseLeave()}  >
                    <Link href="cv.pdf">
                        <Image className={styleUtil.reverse} position="relative" top={{lg: "4vh"}} style={{animation: `reversespin ${rotation2}s linear infinite`}}  src="/icons/cv-et-cv.svg" height={{ base: 7, md: 25, lg:50 }} width={{ base: 7, md: 25, lg:50 }} />
                    </Link>
                </Flex>
                <Flex boxSize={{lg:"10vh"}} onMouseEnter={(textInput)=>handleMaouseEnter("Mess Blog")} onMouseLeave={() => handleMaouseLeave()} >
                    <Link href="/hobby-blog/">
                        <Image className={styleUtil.reverse} style={{animation: `reversespin ${rotation2}s linear infinite`}}   src="/icons/hibouFooter.png" height={{ base: 7, md: 25, lg:50 }} width={{ base: 7, md: 25, lg:50 }} />
                    </Link>
                </Flex>
            </Flex>
        </Flex>      
    </>  
    );
}

export default Spinner;

// style={{animation: `spin ${rotation}s linear infinite`}}
