import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box, CircularProgress } from "@material-ui/core";
import { getBaseApi } from "../../services/config";
import { Header } from "../../components";
import { IAppState } from "../../store/reducers";
import { getServerData, incrementCount, decrementCount, resetCount } from "./actions"
import style from "./mainPage.scss";


const MainPage = () => {
  const dispatch = useDispatch();
  const { counter, loading } = useSelector((state: IAppState) => state.mainPage);

  useEffect(() => {
    dispatch(getServerData());
  }, [])

  return (
    <div className="wrapper">
      <Header api={getBaseApi()} />
      <div className={style.content}>
        {loading ?
          <CircularProgress size={100} color="primary" />
          :
          <>
            <p> Counter: {counter} </p>
            <Box m={2}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => dispatch(incrementCount())}
              >
                Increment +1
              </Button>
            </Box>
            <Box m={2}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => dispatch(decrementCount())}
              >
                Decrement -1
                </Button>
            </Box>
            <Box m={2}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => dispatch(resetCount())}
              >
                Reset 0
            </Button>
            </Box>
          </>
        }
      </div>
    </div >
  );
};

export default MainPage;
