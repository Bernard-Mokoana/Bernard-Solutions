class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        thisset = set(nums)

        if len(thisset) < len(nums):
            return True

        return False