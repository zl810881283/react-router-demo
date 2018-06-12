import React, { Component, createContext } from 'react';

const RouterContext = createContext()

function Tab1(props) {
  return <div>tab1's content</div>
}
function Tab2(props) {
  return <div>tab2's content</div>
}
function Tab3(props) {
  return <div>tab3's content</div>
}

function Nav(props) {
  return (
    <nav>
      <Link path="/tab1">tab 1</Link>
      <Link path="/tab2">tab 2</Link>
      <Link path="/tab3">tab 3</Link>
    </nav>
  )
}
function Link(props) {
  const { path, children } = props

  return <RouterContext.Consumer>
    {
      router => {
        const handleClick = event => {
          event.preventDefault()
          global.history.pushState({}, "xxx", path)
          router.setPath(path)
        }
        return <a href={path} onClick={handleClick}>{children}</a>
      }
    }
  </RouterContext.Consumer>
}
function Content(props) {
  return (
    <RouterContext.Consumer>
      {
        router => {
          if (!router) return
          const res = router.routes.filter(i => i.path == router.path)
          if (res.length) {
            const Component = res[0].component
            return <Component />
          } else {
            return <div>404 NOT FOUND</div>
          }
        }
      }
    </RouterContext.Consumer>
  )
}

class App extends Component {
  state = {
    router: {
      path: global.location.pathname,
      routes: [
        { path: "/tab1", component: Tab1 },
        { path: "/tab2", component: Tab2 },
        { path: "/tab3", component: Tab3 },
      ],
      setPath: path => {
        const newState = { router: { ...this.state.router, path } }
        this.setState(newState)
      }
    },

  }
  render() {
    const { router } = this.state
    return (
      <RouterContext.Provider value={router}>
        <Nav />
        <Content />
      </RouterContext.Provider>
    );
  }
}

export default App;
