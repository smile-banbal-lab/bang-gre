import Accordion from 'react-bootstrap/Accordion';

function ServiceAccodion() {
  return (
    <Accordion className="ServiceAccodion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q. 아이스크림에는 왜 소비기한이 없나요?</Accordion.Header>
        <Accordion.Body>
        아이스크림 제품은 영하 18도 이하에서 유통되고 있어 냉동 보관해 주시면 부패나 변질이 일어나지 않아 소비기한이 따로 없이 제조일만 표기되고 있습니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Q. 제품 소비기한 뒤에 있는 알파벳 기호는 무엇인가요? </Accordion.Header>
        <Accordion.Body>
        제품에 표시된 월, 일 숫자 이외에 알파벳과 숫자는 추적성 관리를 위한 설비번호(일련번호)입니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Q.  아이스크림, 음료 등 제품 공급(납품) 관련 문의드리고 싶어요.  </Accordion.Header>
        <Accordion.Body>
        홈페이지 고객센터 → 제품 공급문의(바로가기) 란에서<br/>납품을 원하는 지역을 검색하시면 담당 영업소 및 지점 연락처를 확인하실 수 있습니다. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Q.  요플레 분리배출(라벨 제거) 방법 알려주세요.  </Accordion.Header>
        <Accordion.Body>
        빙그레는 환경 파괴의 주범인 플라스틱 사용량 절감을 위하여 플라스틱 컵 두께를 최소화하고 종이 라벨을 사용 중입니다.<br/>얇은 컵을 지켜주는 종이 라벨은 컵을 씻기 전 제거하여 종이로 분리배출해 주시면 됩니다.<br/>빙그레는 앞으로도 환경 보호를 위해 다양한 제품의 용기 및 포장에 대해 끊임없이 개선 고민하겠습니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Q.  빙그레 제품을 구입할 수 있는 온라인 몰이 있나요? </Accordion.Header>
        <Accordion.Body>
        아래 빙그레 직영 몰에서 다양한 제품들을 구입할 수 있습니다.<br/>- https://brand.naver.com/binggrae<br/>- https://smartstore.naver.com/bingtft
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ServiceAccodion;