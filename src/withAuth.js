import React, { Component } from 'react';

function withAuth(Com){
   class HOCComponent extends Component{
    componentWillMount(){
      console.log("route enter")
    }
    componentWillUnmount(){
      console.log("route out")
    }
    render(){
      return <Com {...this.props}/>
    }
  }
  HOCComponent.displayName="withAuth"
  return HOCComponent
};

export default withAuth