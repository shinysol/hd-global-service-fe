<template>
  <div class="flex flex-col items-center h-full gap-3 p-4">
    <div class="grid xl:grid-cols-4 md:grid-cols-2 gap-5 max-w-[1240px]">
      <Card>
        <CardHeader>나의소개</CardHeader>
        <CardContent>
          <p class="font-light text-sm">안녕하세요. 풀스택 개발자 입니다.</p>
        </CardContent>
        <CardFooter>
          <div class="text-gray-600 font-extralight">잘 부탁 합니다!</div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>Characteristic</CardHeader>
        <CardContent>
          <ul class="font-light text-sm">
            <li>Super-positive😃</li>
            <li>Intuitive</li>
            <li>Active</li>
            <li>Insightful</li>
          </ul>
        </CardContent>
        <CardFooter>
          <div class="text-gray-600 font-extralight">긍정과 열정사이</div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>Education</CardHeader>
        <CardContent>
          <ul class="font-light text-sm">
            <li>한국방송통신대학교 컴퓨터과학과 수료</li>
            <li>한국방송통신대학교 경제학과 학사(졸업)</li>
            <li>성균관대학교 수학교육과 학사(졸업)</li>
            <li>청명고등학교 졸업</li>
            <li>청명중학교 졸업</li>
            <li>영화초등학교 졸업</li>
          </ul>
        </CardContent>
        <CardFooter>
          <div class="text-gray-600 font-extralight">
            배움 그 자체도 좋습니다.
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>Career</CardHeader>
        <CardContent>
          <ul class="font-light text-sm">
            <li>現 관세법인 에이원 Tech Lab 개발팀 팀장</li>
            <hr />
            <li>관세법인 에이원 혁신전략본부 IT팀 팀장</li>
            <li>관세법인 에이원 경영기획실 IT팀 팀장</li>
            <li>관세법인 에이원 수도권CS팀 팀원</li>
            <li>관세법인 에이원 전략기획팀 팀원</li>
            <li>관세법인 에이원 서울지점 팀원</li>
            <hr />
            <li>흥덕아이비츠 수학팀 팀장/전임</li>
            <li>병점고등학교 계절학기(수학) 출강</li>
            <hr />
            <li>스타벅스 수원영통점 B1</li>
          </ul>
        </CardContent>
        <CardFooter>
          <div class="text-gray-600 font-extralight">
            오늘의 경험으로 내일의 나를 그립니다.
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>Tech Stack</CardHeader>
        <CardContent>
          <ul class="font-light text-sm">
            <li>
              <div>Node.js</div>
              <ul>
                <li>React</li>
                <li>NEXT.js</li>
                <li>Tailwind CSS, SCs</li>
              </ul>
            </li>
            <ul></ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </CardContent>
        <CardFooter>
          <div class="text-gray-600 font-extralight">
            오늘도 새로운 연구를 하고 있어요.
          </div></CardFooter
        >
      </Card>
      <Card>
        <CardHeader>Projects</CardHeader>
        <CardContent>
          <ul class="font-light text-sm">
            <li>스마트통관 Project</li>
            <li>
              <div>통관</div>
              <ul>
                <li>수입자동차 통관 프로그램</li>
                <li>수입자동차 개소세 환급 웹사이트</li>
                <li>확정가격(4방법) 산출 프로그램</li>
                <li>수입 인보이스 OCR</li>
                <li>MY 화물조회 서비스</li>
                <li>H사 통관정산 프로그램</li>
                <li>TCMS 웹</li>
              </ul>
            </li>
            <li>
              <div>일반</div>
              <ul>
                <li>직원업무입력 프로그램</li>
              </ul>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <div class="text-gray-600 font-extralight">
            오늘도 뭔가를 만들고 있어요.
          </div>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ msg: string }>();
import Card from "../components/common/card/Card.vue";
import CardHeader from "../components/common/card/CardHeader.vue";
import CardContent from "../components/common/card/CardContent.vue";
import CardFooter from "../components/common/card/CardFooter.vue";
</script>
