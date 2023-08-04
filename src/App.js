import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main>
      <div className="bodybox">
        <div className="left">
          <div className="loginbox">

            <h2 className="form-box-title"><b>로그인</b></h2>
            <div className="form-box login-register-form-element" id="userLoginBox_in">

              <form className="form" id="loginFrm" >
                <div className='sss'>
                  <TextField id="outlined-basic" label="ID" variant="outlined" />
                  <TextField id="outlined-basic" label="PW" variant="outlined" />
                </div>

                <div className="form-item">
                  <div>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="아이디 저장" />
                  </div>
                  <div>비밀번호 찾기</div>
                </div>

              </form>
            </div>
            <div className='sss'>
              <div id="loginbtn">
                <Button className="btnA" variant="contained" onClick={handleOpen} >로그인</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <div className="dig">
                    <Box className="box">
                      <div className='modalbox'>
                        <div id='numbox'>
                          <div className='userid'>
                            <div className='text'>사용자 ID</div>
                            <div className='aa'>
                              <TextField id="aaa" label="" variant="outlined" />
                              <TextField id="aaa" label="" variant="outlined" />
                            </div>

                          </div>
                          <div className='userid2'>
                            <div className='text'>장비코드</div>
                            <TextField id="inputbox" label="" variant="outlined" />
                          </div>

                          <div className='userid2'>
                            <div className='text'>포트번호</div>
                            <TextField id="inputbox" label="" variant="outlined" />
                          </div>
                        </div>

                        <div className='checkbox'>
                          <FormControlLabel control={<Checkbox defaultChecked />} label="시작 시 자동 실행" />
                          <FormControlLabel control={<Checkbox defaultChecked />} label="시작 시 창 크기 최대화" />
                        </div>

                        <div id='btnCD'>
                          <Button className="btnC" variant="contained">저장</Button>
                          <Button className="btnD" variant="contained">닫기</Button>
                        </div>
                      </div>

                    </Box>
                    <div id="ss">192 . 168 . 0 . 80</div>
                  </div>
                </Modal>

              </div>
              <div id="logoutbtn">
                <Button className="btnB" variant="contained">나가기</Button>
              </div>
            </div>

          </div>
        </div>
        <div className='backimg'></div>




      </div>
    </main>
  );
}

export default App;
