"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remainingRequests = void 0;
function remainingRequests(response, maximumperseconds = 20) {
    const { ceil, floor, max, min } = Math;
    const remaining = Number(response.headers['x-ratelimit-remaining']);
    const timeUntilReset = Number(response.headers['x-ratelimit-reset']);
    const timeNow = ceil(new Date().getTime() / 1000);
    const timeThen = floor(timeUntilReset);
    const secondsRemaning = timeThen - timeNow;
    const minutesRemaning = ceil((timeThen - timeNow) / 60);
    const possiblePerSeconds = floor(max(min(remaining / secondsRemaning, maximumperseconds), -1));
    const maximums = [
        remaining,
        possiblePerSeconds,
        maximumperseconds,
    ];
    return {
        maximumperseconds,
        maximums,
        minutesRemaning,
        possiblePerSeconds,
        remaining,
        secondsRemaning,
        timeNow,
        timeThen,
    };
}
exports.remainingRequests = remainingRequests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtYWluaW5nUmVxdWVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcHJpdmF0ZS9jb3JlL25leHQtcmF0ZS1saW1pdGVyL3JlbWFpbmluZ1JlcXVlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLFNBQWdCLGlCQUFpQixDQUMvQixRQUEyQixFQUMzQixpQkFBaUIsR0FBRyxFQUFFO0lBRXRCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDdkMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNyRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNsRCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkMsTUFBTSxlQUFlLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMzQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDeEQsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzdELENBQUM7SUFFRixNQUFNLFFBQVEsR0FBNkI7UUFDekMsU0FBUztRQUNULGtCQUFrQjtRQUNsQixpQkFBaUI7S0FDbEIsQ0FBQztJQUVGLE9BQU87UUFDTCxpQkFBaUI7UUFDakIsUUFBUTtRQUNSLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsU0FBUztRQUNULGVBQWU7UUFDZixPQUFPO1FBQ1AsUUFBUTtLQUNULENBQUM7QUFDSixDQUFDO0FBL0JELDhDQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ2xpZW50UmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgSVRpbWVSYXRlTGltaXRlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzY3JpcHQvSVRpbWVSYXRlTGltaXRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1haW5pbmdSZXF1ZXN0czxUPihcbiAgcmVzcG9uc2U6IENsaWVudFJlc3BvbnNlPFQ+LFxuICBtYXhpbXVtcGVyc2Vjb25kcyA9IDIwLFxuKTogSVRpbWVSYXRlTGltaXRlciB7XG4gIGNvbnN0IHsgY2VpbCwgZmxvb3IsIG1heCwgbWluIH0gPSBNYXRoO1xuICBjb25zdCByZW1haW5pbmcgPSBOdW1iZXIocmVzcG9uc2UuaGVhZGVyc1sneC1yYXRlbGltaXQtcmVtYWluaW5nJ10pO1xuICBjb25zdCB0aW1lVW50aWxSZXNldCA9IE51bWJlcihyZXNwb25zZS5oZWFkZXJzWyd4LXJhdGVsaW1pdC1yZXNldCddKTtcbiAgY29uc3QgdGltZU5vdyA9IGNlaWwobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgY29uc3QgdGltZVRoZW4gPSBmbG9vcih0aW1lVW50aWxSZXNldCk7XG4gIGNvbnN0IHNlY29uZHNSZW1hbmluZyA9IHRpbWVUaGVuIC0gdGltZU5vdztcbiAgY29uc3QgbWludXRlc1JlbWFuaW5nID0gY2VpbCgodGltZVRoZW4gLSB0aW1lTm93KSAvIDYwKTtcbiAgY29uc3QgcG9zc2libGVQZXJTZWNvbmRzID0gZmxvb3IoXG4gICAgbWF4KG1pbihyZW1haW5pbmcgLyBzZWNvbmRzUmVtYW5pbmcsIG1heGltdW1wZXJzZWNvbmRzKSwgLTEpLFxuICApO1xuXG4gIGNvbnN0IG1heGltdW1zOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPSBbXG4gICAgcmVtYWluaW5nLFxuICAgIHBvc3NpYmxlUGVyU2Vjb25kcyxcbiAgICBtYXhpbXVtcGVyc2Vjb25kcyxcbiAgXTtcblxuICByZXR1cm4ge1xuICAgIG1heGltdW1wZXJzZWNvbmRzLFxuICAgIG1heGltdW1zLFxuICAgIG1pbnV0ZXNSZW1hbmluZyxcbiAgICBwb3NzaWJsZVBlclNlY29uZHMsXG4gICAgcmVtYWluaW5nLFxuICAgIHNlY29uZHNSZW1hbmluZyxcbiAgICB0aW1lTm93LFxuICAgIHRpbWVUaGVuLFxuICB9O1xufVxuIl19