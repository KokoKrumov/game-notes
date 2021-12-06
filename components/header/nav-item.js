import React, {Component} from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";

const titleMotion = {
    rest: {
        color: "#fff",
        y: 0,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        color: "#fe6720",
        y: 20,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeOut"
        }
    }
};

const subTitleMotion = {
    rest: {
        color: "#bebebe",
        y: 0,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        color: "#fff",
        y: -20,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeOut"
        }
    }
};

const borderBottomMotion = {
    rest: {
        width: 0,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        width: '112px',
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeOut"
        }
    }
};

class NavItem extends Component {
    render() {
        return (
            <motion.div

                initial="rest"
                whileHover="hover"
                animate="rest"
                className={'relative cursor-pointer max-w-[12.5rem]'}
            >
                <div
                    className="cursor-pointer text-left"
                    style={{paddingLeft: this.props.paddingLeft}}
                >
                    <motion.p
                        variants={titleMotion}
                        className="textTop font-bold text-white"
                    >
                        {this.props.title}
                    </motion.p>
                    <motion.p
                        variants={subTitleMotion}
                        className="textBottom leading-4 capitalize text-silver"
                    >
                        {this.props.subTitle}
                    </motion.p>
                </div>
                <motion.span variants={borderBottomMotion}
                             className="borderBottom"
                             style={{
                                 position: 'absolute',
                                 marginTop: 15,
                                 width: 15,
                                 height: 4,
                                 background: '#fe6720',
                                 display: 'block',
                                 content: ''
                             }}
                >
                </motion.span>
            </motion.div>
        )
    }
}

export default NavItem;
