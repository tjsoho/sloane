'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  vimeoUrl: string;
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: Video | null;
}

export default function VideoModal({
  isOpen,
  onClose,
  video,
}: VideoModalProps) {
  if (!video) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg border border-black/10 bg-white p-1 shadow-xl transition-all">
                <div className="aspect-video">
                  <iframe
                    src={video.vimeoUrl}
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="h-full w-full"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
