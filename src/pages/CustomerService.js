import React from 'react';

function CustomerService() {
    return (
        <>
            <div>
                <p className="notice-title">고객센터</p>
            </div>
            <div className="category">
                <ul>
                    <li className="active">전체</li>
                    <li>아이스크림</li>
                    <li>우유/치즈</li>
                    <li>발효유</li>
                    <li>커피/음료</li>
                    <li>스낵</li>
                </ul>
            </div>
            <div className="faq_list">
                <ul>
                    <li>
                        <h2>
                            <p className="q">Q</p>
                            <p className="gray">아이스크림</p>아이스크림에는 왜 소비기한이 없나요?
                        </h2>
                        <h5>A. 아이스크림 제품은 영하 18도 이하에서 유통되고 있어 냉동 보관해 주시면 부패나 변질이 일어나지 않아 소비기한이 따로 없이 제조일만 표기되고 있습니다.</h5>
                    </li>
                    <li>
                        <h2>
                            <p className="q">Q</p>
                            <p className="gray">발효유</p>발효유 제품 소비기한 뒤에 있는 알파벳 기호는 무엇인가요?
                        </h2>
                        <h5>A. 제품에 표시된 월, 일 숫자 이외에 알파벳과 숫자는 추적성 관리를 위한 설비번호(일련번호)입니다.</h5>
                    </li>
                    <li>
                        <h2>
                            <p className="q">Q</p>
                            <p className="gray">기타</p>아이스크림, 음료 등 제품 공급(납품) 관련 문의드리고 싶어요.
                        </h2>
                        <h5>A. 홈페이지 고객센터 → 제품 공급문의(바로가기) 란에서
                            납품을 원하는 지역을 검색하시면 담당 영업소 및 지점 연락처를 확인하실 수 있습니다. </h5>
                    </li>
                    <li>
                        <h2>
                            <p className="q">Q</p>
                            <p className="gray">발효유</p>요플레 분리배출(라벨 제거) 방법 알려주세요.
                        </h2>
                        <h5>A. 빙그레는 환경 파괴의 주범인 플라스틱 사용량 절감을 위하여 플라스틱 컵 두께를 최소화하고 종이 라벨을 사용 중입니다.
                            얇은 컵을 지켜주는 종이 라벨은 컵을 씻기 전 제거하여 종이로 분리배출해 주시면 됩니다.
                            빙그레는 앞으로도 환경 보호를 위해 다양한 제품의 용기 및 포장에 대해 끊임없이 개선 고민하겠습니다.</h5>
                    </li>
                    <li>
                        <h2>
                            <p className="q">Q</p>
                            <p className="gray">온라인몰</p>HACCP이 무엇인가요?
                        </h2>
                        <h5>A. 위해요소분석(Hazard Analysis)과 중요관리점(Critical Control Point)의 영문 약자로서 해썹 또는 식품안전 관리인증 기준이라 합니다.
                            원료에서 식탁까지 안전하고 위생적인 제품을 집중 관리하기 위해 직접 인증하고 관리하는 정부 인증 표시입니다.</h5>
                    </li>
                </ul>
            </div>

        
            <div className="btn">
                <ul>
                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
        </>
    );
}

export default CustomerService;