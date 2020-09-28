//
//  SwiftRnBridge.m
//  BridgeApp
//
//  Created by Gurmanjot Singh Randhawa on 15/09/20.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(SwiftModule,NSObject)

RCT_EXTERN_METHOD(add: (NSInteger)one
                  Second:(NSInteger)two
                  Resolver:(RCTPromiseResolveBlock)resolve
                  Rejector: (RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(subtract: (NSInteger)one
                  Second:(NSInteger)two)

@end
