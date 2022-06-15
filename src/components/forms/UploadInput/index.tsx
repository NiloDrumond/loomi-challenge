import { Center, Icon, Image, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { FiPlus } from 'react-icons/fi';
import { FileWithPreview } from './UploadInput.types';

const UploadInput = () => {
  const [files, setFiles] = React.useState<FileWithPreview[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  return (
    <Wrap>
      {files.map((file) => {
        return (
          <WrapItem key={file.name}>
            <Image w="20" h="20" src={file.preview} />
          </WrapItem>
        );
      })}
      <WrapItem>
        <Center
          {...getRootProps({ className: 'dropzone' })}
          bg="main.100"
          w="20"
          h="20"
          cursor="pointer"
        >
          <input {...getInputProps()} />
          <Icon as={FiPlus} />
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default UploadInput;
