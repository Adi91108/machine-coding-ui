
import './App.css'
import { CountdownTimer } from './components/CountDownTimer/CountdownTimer'
import InfiniteScrollSearch from './components/InfiniteScrollApi/Corrected/InfiniteScrollSearch'
import InfiniteScroll from './components/InfiniteScrollApi/InfiniteScroll'
import Pagination from './components/Pagination/Pagination'
import { ProgressBar } from './components/ProgressBar/ProgressBar'
import Todo from './components/TaskManager/To-Do/Todo'
import { ThemeProvider } from './components/ThemeToggle/Theme-Context'
import { ToggleTheme } from './components/ThemeToggle/ToggleTheme'
// import Sidebar from './components/SideBar/Sidebar'
// import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll'
// import SearchBarPage from './components/SearchBar with Pagination/SeacrhBarPage'
// import Carousel from './components/carousel/Carousel'
// import Accordian from './components/Accordian/Accordian'
// import AutoComplete from './components/AutoCompleteSearch/AutoComplete'
// import Index from './components/Modal'
// import StarRating from './components/StarRating/StarRating'
// import Tabs from './components/Tabs/Tabs'
// import Practice from './Practice'
// import NestedComment from './components/NestedComment/NestedComment'
// import TicTacToe from "./components/TicTacToe/TicTacToe"

function App() {
  
  return (
    <>
     {/* <Tabs/> */}
     {/* <StarRating/> */}
     {/* <AutoComplete/> */}
     {/* <Index/> */}
     {/* <Accordian/> */}
     {/* <Carousel/> */}
     {/* <InfiniteScroll/> */}
     {/* <TicTacToe/> */}
     {/* <SearchBarPage/> */}
     {/* <Sidebar/> */}
     {/* <Practice/> */}
     {/* <NestedComment/> */}
     {/* <Pagination/> */}
     {/* <Todo/> */}
     {/* <CountdownTimer/> */}
     {/* <ProgressBar/> */}
     {/* <InfiniteScroll/> */}
     {/* <InfiniteScrollSearch/> */}
     <ThemeProvider>
     <ToggleTheme/>

     </ThemeProvider>
    </>
  )
}

export default App
