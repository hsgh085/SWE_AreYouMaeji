import React from 'react';
import { Link } from "react-router-dom";
import './Termsofagree.css'

function Termsofagree() {

    return (
        <div>
            <body class="agree_body">
                <header class="agree_header">이용약관</header>
                <form class="agree_form">
                    <ul class="agree_form-box">
                        <li class="checkBox01">
                            <span>전체동의</span>
                            <span class="checkmark"> <input type="checkbox" /></span>
                        </li>
                        <ul class="agree_form-box_full">
                            <li class="checkBox02">
                                <span>이용약관 동의(필수)</span>
                                <span class="checkBtn">
                                    <input type="checkbox" name="chk" />
                                </span></li>
                            <textarea name="" id="textarea">제1조(목적)
                                이 약관은 매?회사(전자상거래 사업자)가 운영하는 매?사이버 몰(이하 “매?이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 매?과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.

                                ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」

                                제2조(정의)

                                ① “매?”이란 매?회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.

                                ② “이용자”란 “매?”에 접속하여 이 약관에 따라 “매?”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.

                                ③ ‘회원’이라 함은 “매?”에 회원등록을 한 자로서, 계속적으로 “매?”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.

                                ④ ‘비회원’이라 함은 회원에 가입하지 않고 “매?”이 제공하는 서비스를 이용하는 자를 말합니다.</textarea></ul>
                        <ul class="agree_form-box_full">
                            <li class="checkBox03">
                                <span>개인정보 수집 및 이용에 대한 안내(필수)</span>
                                <span class="checkBtn">
                                    <input type="checkbox" name="chk" />
                                </span></li>
                            <textarea name="textarea" id="textarea">제17조(개인정보보호)
                                ① “매?”은 이용자의 개인정보 수집시 서비스제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다.

                                ② “매?”은 회원가입시 구매계약이행에 필요한 정보를 미리 수집하지 않습니다. 다만, 관련 법령상 의무이행을 위하여 구매계약 이전에 본인확인이 필요한 경우로서 최소한의 특정 개인정보를 수집하는 경우에는 그러하지 아니합니다.

                                ③ “매?”은 이용자의 개인정보를 수집·이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를 받습니다.

                                ④ “매?”은 수집된 개인정보를 목적외의 용도로 이용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용·제공단계에서 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다.

                                ⑤ “매?”이 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받은자, 제공목적 및 제공할 정보의 내용) 등 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제22조제2항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다.

                                ⑥ 이용자는 언제든지 “매?”이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 “몰”은 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 “몰”은 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다.
                            </textarea>
                        </ul>
                        <ul class="agree_form-box_full">
                            <li class="checkBox04">
                                <span>위치정보 이용약관 동의(선택)</span>
                                <span class="checkBtn">
                                    <input type="checkbox" name="chk" />
                                </span></li>
                            <textarea name="textarea" id="textarea"> 제00조(위치서비스)
                                ① “매?”은 이용자의 위치정 수집시 서비스제공을 위하여 필요한 범위에서 최소한의 위치를 수집합니다.

                                ② “매?”은 이용자의 회원가입시 구매계약이행에 필요한 정보를 미리 수집하지 않습니다. 다만, 관련 법령상 의무이행을 위하여 구매계약 이전에 해당 이용약관에 동의할 경우 최소한의 특정 위치정보를 수집하는 경우에는 그러하지 아니합니다
                            </textarea>
                        </ul>
                        <ul class="agree_form-box_full">
                            <li class="checkBox05">
                                <span>이벤트 등 프로모션 알림 메일 수신(선택)</span>
                                <span class="checkBtn">
                                    <input type="checkbox" name="chk" />
                                </span>
                            </li>
                        </ul>
                    </ul>
                    <Link to="/Signup" >
                        <button id="agreeBtn" type="button" className='button'>동의</button></Link>
                    <Link to="/" >
                        <button id="disagreeBtn" type="button" className='button'>동의 안함</button></Link>
                </form>

            </body>
        </div>
    );
}

export default Termsofagree;