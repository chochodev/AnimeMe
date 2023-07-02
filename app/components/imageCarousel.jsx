import { Box, Image, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="relative">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={5000}
      >
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index}`} />
        ))}
      </Carousel>

      <Flex position="absolute" top="50%" left={0} transform="translateY(-50%)">
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="Previous"
          icon={<FaChevronLeft />}
          onClick={onOpen}
        />
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="Next"
          icon={<FaChevronRight />}
          onClick={onClose}
        />
      </Flex>
    </Box>
  );
};

export default ImageCarousel;