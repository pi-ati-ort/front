import React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import { normativas } from "../../utils/normativas";

const AllNorms = () => {
  return (
    <div>
      <div className="container mx-auto min-h-screen mb-10">
        <h2 className="text-5xl font-semibold mt-12">Normativas</h2>

        <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-12 mb-32">
          {normativas.map((item, index) => (
            <Disclosure as="div" className="mt-2 mb-6">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white border-2 border-verde-idem px-4 py-2 text-left text-3xl text-black hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-light-green-500/75 transition duration-300 ease-in-out h-20">
                    <span className="mt-3">{item.name}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "" : "rotate-180 transform"
                      } h-8 w-8 mt-4 mr-2 text-green-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4">
                    <div className="grid grid-cols-4 gap-6">
                      <div className="col-span-2">
                        <h3 className="text-xl mt-4 mb-4">
                          <b>Descripción</b> <br />
                        </h3>
                        <p className="text-black text-justify">
                          {item.description}
                        </p>
                        <div className="grid grid-cols-2">
                          <div className="col-span-1">
                            <h3 className="text-lg mt-4 mb-4">
                              <b>Valor</b> <br />
                            </h3>
                            <p className="text-black text-justify">
                              {item.valor}
                              {item.unidad ? item.unidad : ""}
                            </p>
                          </div>
                          <div className="col-span-1">
                            <h3 className="text-lg mt-4 mb-4">
                              <b>Norma</b> <br />
                            </h3>
                            <p className="text-black">
                              {item.norma.map((norma) => {
                                return <p>{norma}</p>;
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <h3 className="text-xl mt-4 mb-4">
                          <b>Texto normativo</b> <br />
                        </h3>
                        <p className="text-black text-justify">
                          {item.texto_normativo}
                        </p>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNorms;
