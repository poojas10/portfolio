export const pageAnimation={
    hidden:{
        opacity:0,
        y:300,
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            when:'beforeChildren',
            staggerChildren:1,
        },
    },
    exit:{
        opacity:0,
        y:300,
        transition:{
            duration:0.5,
        },
    }
}
export const titleAnim={
    hidden:{
     y:300,
    },
    show:{
        y:0,
        transition:{
            duration:0.75,
            ease:'easeOut'
        }
    }
}
export const fade={
    hidden:{
        x:200,
        opacity:0,
    },
    show:{
        x:0,
        opacity:1,
        transition:{ease:'easeOut',duration:1}
    }
}
export const photoAnim={
    hidden:{
        scale:1.5,opacity:0,
    },
    show:{
        scale:1,
        opacity:1,
        transition:{ease:'easeOut',duration:0.75}
    }
}

export const projectPhotoAnim={
    hidden:{
        scale:2,opacity:0,
    },
    show:{
        scale:1,
        opacity:1,
        transition:{ease:'easeOut',duration:0.75}
    }
}
export const lineAnim={
    hidden:{
        width:"0%",
    },
    show:{
width:'100%',
transition:{
    duration:1,
}
    }
}
// export const slider={
//     hidden:{
//     x:'-130vw',
//     skew:'45deg'
//     },
//     show:{
//         x:'100vw',
//         skew:'0deg',
//         transition:{
//             ease:'easeOut',
//             duration:0.5
//         }
//     }
// }