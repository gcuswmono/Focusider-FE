import React from 'react';
import {
  Modal,
  Button,
  ModalFooter,
  ModalContent,
  ModalBody,
  ModalHeader,
} from '@nextui-org/react';

interface ExitModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ExitModal: React.FC<ExitModalProps> = ({ open, onConfirm, onCancel }) => {
  return (
    <Modal isOpen={open} onClose={onCancel} aria-labelledby="modal-title" backdrop="blur">
      <ModalContent>
        <ModalHeader>
          <h2 id="modal-title" className="text-lg font-semibold">
            정말 종료하시겠습니까?
          </h2>
        </ModalHeader>
        <ModalBody>
          <p className="text-center text-sm">앱을 종료하려면 예를 누르세요.</p>
        </ModalBody>
        <ModalFooter>
          {/* '아니요' 버튼 - 흰 배경, 8B73EF 글자, A290F1 테두리 */}
          <Button
            className="rounded border border-[#A290F1] bg-white px-4 py-2 text-[#8B73EF]"
            onClick={onCancel}
          >
            아니요
          </Button>
          {/* '예' 버튼 - 8B73EF 배경, A290F1 글자, 동일한 테두리 */}
          <Button
            className="rounded border border-[#8B73EF] bg-[#8B73EF] px-4 py-2 text-[#A290F1]"
            onClick={onConfirm}
          >
            예
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ExitModal;
