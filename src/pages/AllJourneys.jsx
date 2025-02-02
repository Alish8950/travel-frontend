import React from "react";
import { NoteThread } from "../assets";

const AllJourneys = () => {
  return (
    <>
      <div className="px-10 mx-auto w-full h-full">
        <div className="max-w-[82%] w-full h-full flex gap-6 items-center py-6 mx-auto">
          <div className="w-[40%] flex flex-col gap-4">
            <div className="relative note-box-shadow w-full rounded-2xl p-8 border-e-primary-light border-e-5">
              <div className="absolute left-[-10px] top-6">
                <img src={NoteThread} alt="thread" />
              </div>
              <div className="font-cursive text-2xl">Title Text</div>
              <div className="text-primary-light-hover mt-1 text-xs">
                July 2nd, 2022
              </div>
              <div className="mt-4">
                Lorem ipsum dolor sit amet. Aut pariatur dolores eum quod
                dolores est molestias earum. Qui quasi Quis sit voluptas
                accusamus id iure sequi. Nam maiores explicabo cum sunt sint sed
                officiis voluptatum ut galisum cupiditate ea sint...
              </div>
              <div></div>
            </div>
            <div className="relative note-box-shadow w-full rounded-2xl p-8">
              <div className="absolute left-[-10px] top-6">
                <img src={NoteThread} alt="thread" />
              </div>
              <div className="font-cursive text-2xl">Title Text</div>
              <div className="text-primary-light-hover mt-1 text-xs">
                July 2nd, 2022
              </div>
              <div className="mt-4">
                Lorem ipsum dolor sit amet. Aut pariatur dolores eum quod
                dolores est molestias earum. Qui quasi Quis sit voluptas
                accusamus id iure sequi. Nam maiores explicabo cum sunt sint sed
                officiis voluptatum ut galisum cupiditate ea sint...
              </div>
              <div></div>
            </div>
          </div>
          <div className="relative w-[60%] h-full">
            <div className="ind-note-box-shadow rounded-2xl pt-[60px] h-full">
              <hr className="border-gray-shade2" />
              <div className="border-s-1 h-full absolute left-[60px] top-0 border-gray-shade2"></div>
              <div className="pl-[80px] pb-10 w-[90%] mt-4">
                <div className="font-cursive text-5xl text-primary">Title Text</div>
                <div className="font-extralight mt-6">
                  Lorem ipsum dolor sit amet. Et deleniti amet qui accusantium
                  autem et nulla voluptas et similique adipisci. Quo cupiditate
                  deserunt qui maiores molestiae qui voluptatem accusamus quo
                  neque unde aut enim quia sit fugit totam. Id repellat
                  voluptatem quo laudantium dolor quo natus dicta. Qui quidem
                  alias est dolor aliquam qui iusto galisum ut harum deleniti.
                  Ut harum quia ab dolorem placeat 33 molestiae laboriosam sed
                  inventore tenetur. Vel laudantium voluptatibus et odio
                  voluptates eum voluptates iusto vel facere laudantium? Ea
                  necessitatibus beatae et temporibus nobis id quaerat maxime
                  nam consequatur voluptas rem dolor voluptatem? Ut reiciendis
                  voluptatum et impedit dignissimos sit sequi quia. Aut nemo
                  rerum et inventore labore vel corporis voluptas in
                  consequuntur voluptas. Et saepe voluptate sed commodi magni
                  qui voluptatem delectus et odio dolor aut soluta molestiae.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJourneys;
