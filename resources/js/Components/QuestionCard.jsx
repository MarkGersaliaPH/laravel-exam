import React from 'react'
import SimpleCard from './SimpleCard'
import { FcFullTrash, FcPlus } from "react-icons/fc";
import Badge from './Badge';

export default function QuestionCard({item,action,isDrag,...props}) {  
  return (
    <div>
          <div className="relative mb-2">
                    <SimpleCard className="mb-2" {...props}>
                        <div className="mb-2">
                            <span className="font-semibold text-lg line-clamp-2 text-gray-800">
                                {item.text}
                            </span>
                        </div>

                        <div className="text-sm text-gray-600">
                            <div>
                                <span className="font-medium">Difficulty:</span>{" "}
                                {item.difficulty_display}
                            </div>
                            <div>
                                <span className="font-medium">Language:</span>{" "}
                                {item.langguage_display}
                            </div>
                            
                            <div>
                                <span className="font-medium">Tags:</span>{" "}
                                {
                                    item.display_tags && item.display_tags.map((item,key)=>
                                        <Badge key={key} color='gray'>{item.value}</Badge>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <div 
                                className={`absolute top-2 cursor-pointer right-1 px-3 py-1  `}
                                onClick={() => action(item)}
                            >
                                {
                                    isDrag ? <FcPlus />  : <FcFullTrash />
                                } 
                            </div>
                        </div>
                    </SimpleCard>
                    </div>
    </div>
  )
}
