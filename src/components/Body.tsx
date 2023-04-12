import { Flex, Spacer, Container, Icon, Text } from "@chakra-ui/react";

const Body = () => {

  return (
    <div>
      <Flex minWidth='initial' alignItems='center' gap='2' backgroundColor="#0F2841" h='500px'>
        <Spacer />
        <Container centerContent>
          <Icon width="97" height="93" viewBox="0 0 97 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="96" height="93" rx="46.5" fill="#E93334" />
            <path d="M25.0477 30.0071L21.01 34.9252C20.9801 34.9623 20.9723 35.0118 20.9903 35.0559L24.2812 43.0102C24.2985 43.0512 24.3355 43.0814 24.3796 43.0891L30.4121 44.1885C30.4451 44.1947 30.4742 44.2125 30.4939 44.2388L33.8973 48.7193C33.9429 48.7788 34.0295 48.7889 34.0885 48.7417L37.9586 45.5794C38.0018 45.5439 38.0176 45.4859 37.9979 45.4341L37.0568 42.9422C37.0473 42.9182 37.0316 42.8966 37.0095 42.8819L30.8834 38.5622C30.7827 38.4911 30.8276 38.3357 30.9511 38.3264L34.9227 38.0403C34.9533 38.038 34.984 38.0465 35.0092 38.0643L42.3283 43.1834C42.3527 43.2004 42.3708 43.2252 42.3787 43.2538L43.9037 48.492C43.9147 48.5298 43.9423 48.5608 43.9792 48.5762L50.6672 51.3728C50.6751 51.3759 50.6822 51.3797 50.6893 51.3844L60.0016 57.5403C60.0464 57.5705 60.0685 57.6238 60.0567 57.6764L58.1948 65.9717C58.1854 66.015 58.1988 66.0606 58.2302 66.0915L61.1159 68.9267C61.1395 68.9499 61.1717 68.9638 61.2056 68.9646L65.8625 69.0968C65.9609 69.0999 66.0278 69.0002 65.9869 68.9128L64.8088 66.3768C64.8049 66.3676 64.7994 66.359 64.7931 66.3505L62.6889 63.7017C62.633 63.6321 62.6637 63.5285 62.7487 63.4991L65.8909 62.3966C65.9507 62.3757 66.0168 62.3989 66.049 62.4522L67.8629 65.4227C67.8699 65.4336 67.8747 65.4459 67.8778 65.4583L68.804 69.1587C68.8103 69.1826 68.8229 69.2043 68.841 69.2213L71.751 71.9637C71.8163 72.0256 71.9241 72.0055 71.9627 71.9251L74.4312 66.7789C74.4454 66.7487 74.4478 66.7139 74.4375 66.683L73.0053 62.4136C72.9872 62.3602 73.0069 62.3015 73.0526 62.2682L75.946 60.1815C76.0153 60.1312 76.0184 60.0299 75.9523 59.9758L72.5269 57.1978C72.4962 57.1723 72.4781 57.1352 72.4789 57.0958L72.5741 50.646C72.5741 50.6166 72.5851 50.5888 72.6032 50.5664L75.3401 47.2433C75.3802 47.1946 75.3795 47.1242 75.337 47.0763L71.0672 42.2262C71.0632 42.2216 71.0593 42.217 71.0562 42.2123L60.1676 25.7849C60.1503 25.7586 60.1243 25.7392 60.0937 25.7307L57.5157 24.9962C57.441 24.9746 57.3631 25.0217 57.3489 25.0967L56.6832 28.5574C56.6706 28.6216 56.6116 28.6672 56.5455 28.6634L49.0603 28.2257C49.0194 28.2234 48.9817 28.2026 48.9588 28.1693L46.4643 24.5903C46.4486 24.5679 46.4258 24.5509 46.3998 24.5416L41.602 22.8499C41.5705 22.8391 41.5367 22.8399 41.506 22.8522L36.9277 24.7426C36.8947 24.7558 36.8585 24.7566 36.8254 24.7426L25.2389 20.0101C25.1712 19.9823 25.0933 20.014 25.065 20.0812L23.2512 24.4535C23.2331 24.4968 23.1929 24.5277 23.1457 24.5331L20.1153 24.9228C20.0453 24.9321 19.9949 24.9931 20.0004 25.062L20.1924 27.5005C20.1924 27.5005 23.4542 27.233 23.6619 27.1302C23.8697 27.0281 25.0477 30.0063 25.0477 30.0071Z" fill="white" />
          </Icon>
          <Text fontSize="3xl" fontWeight={700} maxW={700} lineHeight="100%" color="white" mt={7} mb={4}>
            No importa en <br />que provincia estés
          </Text>
          <Text fontSize='xl' color="white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint elit officia.</Text>
        </Container>
        <Spacer />
        <Container centerContent>
          <Icon width="97" height="93" viewBox="0 0 97 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="96" height="93" rx="46.5" fill="#E93334" />
            <path d="M45.7917 51.9167H40.375C40.375 45.452 42.9431 39.2522 47.5143 34.681C52.0855 30.1098 58.2854 27.5417 64.75 27.5417V32.9584C54.2688 32.9584 45.7917 41.4354 45.7917 51.9167ZM64.75 43.7917V38.375C57.275 38.375 51.2084 44.4417 51.2084 51.9167H56.625C56.625 47.4209 60.2542 43.7917 64.75 43.7917ZM34.9584 24.8334C34.9584 21.8271 32.5479 19.4167 29.5417 19.4167C26.5354 19.4167 24.125 21.8271 24.125 24.8334C24.125 27.8396 26.5354 30.25 29.5417 30.25C32.5479 30.25 34.9584 27.8396 34.9584 24.8334ZM47.0104 26.1875H41.5938C41.2795 28.0794 40.3039 29.7984 38.8408 31.0383C37.3777 32.2782 35.522 32.9586 33.6042 32.9584H25.4792C23.2313 32.9584 21.4167 34.7729 21.4167 37.0209V43.7917H37.6667V37.6709C40.176 36.8795 42.3984 35.37 44.0591 33.3291C45.7197 31.2882 46.7458 28.8053 47.0104 26.1875ZM67.4584 60.0417C70.4646 60.0417 72.875 57.6313 72.875 54.625C72.875 51.6188 70.4646 49.2084 67.4584 49.2084C64.4521 49.2084 62.0417 51.6188 62.0417 54.625C62.0417 57.6313 64.4521 60.0417 67.4584 60.0417ZM71.5209 62.75H63.3959C61.478 62.7503 59.6223 62.0699 58.1592 60.83C56.6961 59.59 55.7206 57.8711 55.4063 55.9792H49.9896C50.2542 58.597 51.2803 61.0799 52.941 63.1208C54.6016 65.1617 56.824 66.6712 59.3334 67.4625V73.5834H75.5834V66.8125C75.5834 64.5646 73.7688 62.75 71.5209 62.75Z" fill="white" />
          </Icon>
          <Text fontSize="3xl" fontWeight={700} maxW={700} lineHeight="100%" color="white" mt={7} mb={4}>
            Conecta con <br />personas increíbles
          </Text>
          <Text fontSize='xl' color="white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint elit officia.</Text>
        </Container>
        <Spacer />
      </Flex>
    </div>
  )
}

export default Body