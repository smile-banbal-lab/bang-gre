import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
    return (
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header> 방그레 건강기능식품을 주문할 수 있는 몰이 따로 있나요?</Accordion.Header>
            <Accordion.Body>
            아래 방그레 직영 몰에서 건강기능식품 제품들을 구입할 수 있습니다. 
            - https://smartstore.naver.com/bingtft


            (상세 주문 방법)

            https://smartstore.naver.com/bingtft/notice/detail?id=5001155134
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>아이스크림 포장이 부풀어 올랐어요.</Accordion.Header>
            <Accordion.Body>
            아이스크림 포장 내부는 진공 상태가 아니므로, 온도 변화에 따라 포장 내부 공간의 공기가 수축, 팽창하게 됩니다.
            차가운 냉동고에서 제품을 외부로 꺼내면 제품의 표면은 순간적으로 급격한 온도 변화를 겪게 되고 이로 인해 포장 안쪽에 수축되어 있던 공기가 팽창하게 되는데요, 포장지의 재질이나 포장지 내부의 공간의 정도에 따라 눈에 띄게 팽창이 되는 경우가 있을 수 있습니다.
            제품의 변질에 따른 현상이 아니니 안심하고 드시길 바랍니다.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header> 요플레 분리배출(라벨 제거) 방법 알려주세요.</Accordion.Header>
            <Accordion.Body>
            방그레는 환경 파괴의 주범인 플라스틱 사용량 절감을 위하여 플라스틱 컵 두께를 최소화하고 종이 라벨을 사용 중입니다. 
            얇은 컵을 지켜주는 종이 라벨은 컵을 씻기 전 제거하여 종이로 분리배출해 주시면 됩니다. 
            빙그레는 앞으로도 환경 보호를 위해 다양한 제품의 용기 및 포장에 대해 끊임없이 개선 고민하겠습니다.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header> 빙그레 인사 채용 관련하여 내용이 궁금합니다.</Accordion.Header>
            <Accordion.Body>
            빙그레 대졸 신입사원 공채는 일반적으로 상반기 4월과 하반기 9월에 있으며, 경력직과 생산직 등의 수시 채용도 진행하고 있습니다. 더 자세한 내용은 아래의 홈페이지에서 확인하실 수 있습니다.

            채용홈페이지 : https://recruit.bing.co.kr HR혁신팀 : 02-2022-6116~8
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    );
}

export default AllCollapseExample;