import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends  Component {
    constructor(props) {
        super(props)
        this.state={
            focus: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }

    render(){
        return (
            <div>
                <HeaderWrapper>
                    <Logo/>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">Aa</NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                time={200}
                                in={this.state.focus}
                                classNames="slide"
                            >
                                <NavSearch 
                                    className={this.state.focus ? 'focused' : ''}
                                    onFocus={this.handleInputFocus}
                                    onBlur={this.handleInputBlur}
                                    >

                                </NavSearch>
                            </CSSTransition>
                            <i className={this.state.focus ? 'iconfont focused' : 'iconfont'}>&#xe6dd;</i>
                        </SearchWrapper>
                        <Addition>
                            <Button className="writting">
                                <i className="iconfont">&#xe61d;</i>
                                 写文章</Button>
                            <Button className="reg">注册</Button>
                        </Addition>
                    </Nav>
                </HeaderWrapper>
            </div>
        )
    }
    handleInputFocus(){
        this.setState({
            focus:true
        })
    }
    handleInputBlur(){
        this.setState({
            focus:false
        })
    }
}
export default Header;